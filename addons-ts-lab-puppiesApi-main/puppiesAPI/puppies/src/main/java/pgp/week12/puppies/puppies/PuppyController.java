package pgp.week12.puppies.puppies;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/puppies")
public class PuppyController {

    Logger logger = Logger.getLogger(PuppyRepository.class.getName());

    private final PuppyService puppyService;

    public PuppyController(PuppyService puppyService) {
        this.puppyService = puppyService;
    }

    @GetMapping
    ResponseEntity<List<PuppyResponseDTO>> getAllPuppies() {
        List<Puppy> body = puppyService.getAllPuppies();
        logger.info(body.get(0).getName());
        return ResponseEntity.ok(body.stream().map(PuppyConverter::toResponseDTO).collect(Collectors.toList()));
    }

    @GetMapping(path="{id}")
    ResponseEntity<PuppyResponseDTO> getPuppy(@PathVariable String id) {
        Puppy byId = puppyService.findById(id);
        if (byId == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(PuppyConverter.toResponseDTO(byId));
    }

    @PostMapping
    ResponseEntity<PuppyResponseDTO> createPuppy(@RequestBody CreatePuppyDTO newPuppy, HttpServletRequest req) {
        Puppy puppy = puppyService.savePuppy(PuppyConverter.fromDTO(newPuppy));
        URI location = URI.create((req.getRequestURI() + "/" + puppy.getId()));
        return ResponseEntity.created(location).body(PuppyConverter.toResponseDTO(puppy));
    }

    @PutMapping(path="{id}")
    ResponseEntity<PuppyResponseDTO> updatePuppy(@RequestBody CreatePuppyDTO puppy, @PathVariable String id) {
        Puppy pup = PuppyConverter.fromDTO(puppy);
        pup.setId(id);
        Puppy updatedPuppy = puppyService.updatePuppyData(pup);
        if(updatedPuppy != null) {
            return ResponseEntity.accepted().body(PuppyConverter.toResponseDTO(updatedPuppy));
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping(path="{id}")
    ResponseEntity<Puppy> deleteReview(@PathVariable String id) {
        puppyService.deletePuppy(id);
        return ResponseEntity.noContent().build();
    }

}

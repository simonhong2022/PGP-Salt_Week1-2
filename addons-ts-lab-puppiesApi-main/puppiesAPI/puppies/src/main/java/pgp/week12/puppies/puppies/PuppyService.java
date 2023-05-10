package pgp.week12.puppies.puppies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class PuppyService {
    @Autowired
    JpaPuppyRepository repo;
    @Autowired
    IPuppyRepository puppyRepo;

    public PuppyService() {
    }

    public PuppyService(IPuppyRepository puppyRepo,JpaPuppyRepository repo) {
        this.repo = repo;
        this.puppyRepo = puppyRepo;
    }

    List<Puppy> getAllPuppies() {
        return puppyRepo.listPuppies();
    }

    public Puppy findById(String id) {
        return puppyRepo.getById(id);
    }

    public Puppy savePuppy(Puppy puppy) {
        return puppyRepo.savePuppy(puppy);
    }

    public void savePuppies(List<Puppy> puppies) {
        repo.saveAll(puppies);
    }
    public Puppy updatePuppyData(Puppy newPuppyData) {
        Puppy storedPuppy = findById(newPuppyData.getId());
        if(storedPuppy == null) {
            return null;
        }
        if(newPuppyData.getBreed() != null) {
            storedPuppy.setBreed(newPuppyData.getBreed());
        }
        if(newPuppyData.getName() != null) {
            storedPuppy.setName(newPuppyData.getName());
        }
        if(newPuppyData.getBirthdate() != null) {
            storedPuppy.setBirthdate(newPuppyData.getBirthdate());
        }
        return puppyRepo.savePuppy(storedPuppy);
    }

    public void deletePuppy(String id) {
        puppyRepo.deletePuppy(id);
    }

    public void removePuppy(Puppy puppy) {
        puppyRepo.deletePuppy(puppy);
    }


}

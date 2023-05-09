package pgp.week12.puppies.puppies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Repository
public class PuppyRepository implements IPuppyRepository {

    Logger log = Logger.getLogger(PuppyRepository.class.getName());

    @Autowired
    JpaPuppyRepository repo;
    public PuppyRepository(JpaPuppyRepository repo) {
        this.repo = repo;
    }

    public PuppyRepository() {
    }

    @Override
    public List<Puppy> listPuppies() {
        return Streamable.of(repo.findAll()).toList();
    }

    @Override
    public Puppy getById(String id) {
        Optional<Puppy> byId = repo.findById(id);
        return byId.orElse(null);
    }

    @Override
    public Puppy savePuppy(Puppy newPuppy) {
        if(newPuppy != null) {
            return repo.save(newPuppy);
        }
        return null;
    }

    @Override
    public void deletePuppy(String id) {

        try{
            if(id != null) {
                repo.deleteById(id);
            }
        } catch (EmptyResultDataAccessException ex) {
            log.info("Attempt to delete Puppy %d that doesn't exist".formatted(id));
        }

    }

    @Override
    public void deletePuppy(Puppy puppy) {

        if(puppy != null) {
            repo.delete(puppy);
        }

    }
}

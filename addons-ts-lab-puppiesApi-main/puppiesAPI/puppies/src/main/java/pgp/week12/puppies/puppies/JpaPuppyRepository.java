package pgp.week12.puppies.puppies;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface JpaPuppyRepository extends CrudRepository<Puppy, String> {

    List<Puppy> findByName(String name);


}

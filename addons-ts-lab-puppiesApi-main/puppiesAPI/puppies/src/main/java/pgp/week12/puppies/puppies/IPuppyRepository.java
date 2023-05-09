package pgp.week12.puppies.puppies;
import java.util.List;
public interface IPuppyRepository {
    List<Puppy> listPuppies();

    Puppy getById(String id);

    Puppy savePuppy(Puppy newPuppy);

    void deletePuppy(String id);

    void deletePuppy(Puppy puppy);


}

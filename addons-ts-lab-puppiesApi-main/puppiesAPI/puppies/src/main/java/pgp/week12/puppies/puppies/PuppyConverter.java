package pgp.week12.puppies.puppies;

public class PuppyConverter {

    static Puppy fromDTO(CreatePuppyDTO dto) {
        return new Puppy(dto.id(), dto.breed(), dto.name(), dto.birthdate());
    }

    static PuppyResponseDTO toResponseDTO(Puppy entity) {
        return new PuppyResponseDTO(
                entity.getId()
                , entity.getBreed()
                , entity.getName()
                , entity.getBirthdate());
    }

}

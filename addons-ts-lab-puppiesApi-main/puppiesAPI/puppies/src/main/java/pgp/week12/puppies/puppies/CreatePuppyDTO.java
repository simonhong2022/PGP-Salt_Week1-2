package pgp.week12.puppies.puppies;
import com.fasterxml.jackson.annotation.JsonProperty;

public record CreatePuppyDTO(@JsonProperty("id") String id, @JsonProperty("breed") String breed,
                             @JsonProperty("name") String name, @JsonProperty("birthdate") String birthdate) {

}

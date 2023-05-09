package pgp.week12.puppies.puppies;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PuppyResponseDTO(@JsonProperty String id, @JsonProperty String breed,
                               @JsonProperty String name, @JsonProperty String birthdate) {
}

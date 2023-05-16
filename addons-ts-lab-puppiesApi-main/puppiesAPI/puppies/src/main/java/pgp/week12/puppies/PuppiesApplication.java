package pgp.week12.puppies;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pgp.week12.puppies.puppies.Puppy;
import pgp.week12.puppies.puppies.PuppyService;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class PuppiesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PuppiesApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(PuppyService puppyService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Puppy>> typeReference = new TypeReference<>() {
			};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/data/data.json");
			try {
				List<Puppy> puppies = mapper.readValue(inputStream,typeReference);
				puppyService.savePuppies(puppies);
				System.out.println("Puppies Saved!");
			} catch (IOException e){
				System.out.println("Unable to save puppies: " + e.getMessage());
			}
		};
	}

}

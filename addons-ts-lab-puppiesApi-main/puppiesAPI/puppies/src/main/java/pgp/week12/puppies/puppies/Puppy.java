package pgp.week12.puppies.puppies;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="puppies")
public class Puppy {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid", strategy = "uuid"
    )
    @Column(name="puppy_id")
    private String id;

    @Column(name = "breed")
    private String breed;
    @Column(name = "name")
    private String name;
    @Column(name = "birth_date")
    private String birthdate;

    public Puppy(String id, String breed, String name, String birthdate) {
        this.id = id;
        this.breed = breed;
        this.name = name;
        this.birthdate = birthdate;
    }

    public Puppy() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }


}

import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Image, Card } from 'semantic-ui-react'
import { IPuppy, fetchPuppyPhoto } from "@/apicalls/puppies";

type PuppyCardProps = {
    puppy: IPuppy;
    setPuppies: Dispatch<SetStateAction<IPuppy[]>>;
}

export default function PuppyCard(props: PuppyCardProps) {
    
    const [photoUrl, setPhotoUrl] = useState<string>("");
    const { puppy, setPuppies } = props;

    useEffect(() => {
        fetchPuppyPhoto(puppy.breed, setPhotoUrl);
    }, []);

    return (
        <main className="puppycard-main">
            <Card color="green" href={"/" + puppy.id}>
                <Image src={photoUrl} alt={puppy.breed} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{puppy.name}</Card.Header>
                    <Card.Meta>Breed: {puppy.breed}</Card.Meta>
                    <Card.Meta>Date of Birth: {puppy.birthdate}</Card.Meta>
                </Card.Content>
            </Card>
        </main>
    )



}
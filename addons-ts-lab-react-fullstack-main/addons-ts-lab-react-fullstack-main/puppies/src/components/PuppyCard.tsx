import { useState, Dispatch, SetStateAction } from "react";
import { Button, Image, Card, Confirm, Icon } from 'semantic-ui-react'
import Link from "next/link";
import { IPuppy } from "@/apicalls/puppies";

type PuppyCardProps = {
    puppy: IPuppy;
    setPuppies: Dispatch<SetStateAction<IPuppy[]>>;
}

export default function PuppyCard(props: PuppyCardProps) {

    const { puppy, setPuppies } = props;

    return (
        <main className="puppycard-main">
            <Card color="green" href={"/" + puppy.id}>
                <Image src="data:image/jpeg;base64,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" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{puppy.name}</Card.Header>
                    <Card.Meta>Breed: {puppy.breed}</Card.Meta>
                    <Card.Meta>Date of Birth: {puppy.birthdate}</Card.Meta>
                </Card.Content>
            </Card>
        </main>
    )



}
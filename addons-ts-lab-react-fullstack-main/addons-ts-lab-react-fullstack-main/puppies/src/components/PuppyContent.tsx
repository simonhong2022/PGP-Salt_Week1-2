import { IPuppy, addPuppy, fetchPuppies } from "@/apicalls/puppies";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Icon, Form, Label, Popup, Message, Grid } from 'semantic-ui-react'
import PuppyCard from "./PuppyCard";


export default function PuppyContent() {

    const [puppies, setPuppies] = useState<IPuppy[]>([]);

    useEffect(() => {

        fetchPuppies(setPuppies);

    }, []);

    const [open, setOpen] = useState(false);
    const [errMessage, setErrMessage] = useState<string>("");

    return (

        <div>
            <div>
                <Modal animation={false}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className="puppies-modal-btn" color="green">Add Puppy +</Button>}
                >
                    <Modal.Header>Add New Puppy</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            addPuppy(e, setPuppies, setOpen, setErrMessage);
                        }}>
                            <Form.Field>
                                <Label>Breed</Label>
                                <Input icon="paw" placeholder="Name your breed" type="text" name="breed" />
                            </Form.Field>
                            <Form.Field>
                                <Label>Name</Label>
                                <Input icon="paw" placeholder="Name your puppy" type="text" name="pname" />
                            </Form.Field>
                            <Form.Field>
                                <Label>Birth Date</Label>
                                <Input icon="calendar" placeholder="Day of Birth" type="text" name="birthdate" />
                            </Form.Field>
                            <Button type="submit">Add Puppy +</Button>
                        </Form>
                        {(errMessage.length > 0) ? <Message warning>
                            <p>{errMessage}</p>
                        </Message> : null}
                    </Modal.Content>
                </Modal>
            </div>
            <div>
                {puppies.map((puppy) => {
                    return (
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <PuppyCard puppy={puppy} setPuppies={setPuppies} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    )
                })}
            </div>
        </div>


    )


}
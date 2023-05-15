import Link from "next/link";
import { IPuppy, fetchPuppyPhoto } from "@/apicalls/puppies";
import { deleteSpecificPuppy, fetchPuppy, updatePuppy } from "@/apicalls/specificpuppy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Form, Label, Card, Message, Image, Confirm } from 'semantic-ui-react'

export default function SpecificPuppy() {

    const router = useRouter();
    const { puppyid } = router.query;
    const [puppy, setPuppy] = useState<IPuppy>({} as IPuppy);
    const [photoUrl, setPhotoUrl] = useState<string>("");

    useEffect(() => {
        if (puppyid) {
            fetchPuppy(puppyid, setPuppy, setPhotoUrl);
        }
    }, [puppyid]);

    
    const [open, setOpen] = useState(false);
    const [deleteopen, setDeleteopen] = useState(false);

    const [errMessage, setErrMessage] = useState<string>("");

    return (
        <main className="specificpuppy-main">
            <nav className="specificpuppy-navbar">
                <Link className="specificpuppy-navlink" href="/">Home</Link>
                <Link className="specificpuppy-navlink" href="/">About</Link>
            </nav>
            <div className="specificpuppy-body-container">
                <div className="specificpuppy-content-wrap">
                    <div className="specificpuppy-card-container">

                        <Card fluid centered>
                            <Card.Content className="specificpuppy-card-container-content">
                                <Image className="specificpuppy-card-container-content-img"

                                    src={photoUrl} alt={puppy.breed}  wrapped ui={false}
                                />
                                <Card.Header className="specificpuppy-card-container-header" as="h1">{puppy.name}</Card.Header>
                                <Card.Meta>{puppy.breed}</Card.Meta>
                                <Card.Meta>{puppy.birthdate}</Card.Meta>
                                <Card.Description>
                                    {puppy.name} is {puppy.breed} & was born at {puppy.birthdate}.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra className="specificpuppy-card-container-content">
                                <Modal animation={false}
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                    trigger={<Button className="specificpuppy-modal-btn" inverted color="blue">Edit Puppy</Button>}
                                >
                                    <Modal.Header>Edit puppy</Modal.Header>
                                    <Modal.Content>
                                        <Form onSubmit={(e) => {
                                            e.preventDefault();
                                            updatePuppy(puppy.id, e, setPuppy, setOpen, setErrMessage, setPhotoUrl);
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
                                            <Button type="submit">Edit Puppy</Button>
                                        </Form>
                                        {(errMessage.length > 0) ? <Message warning>
                                            <p>{errMessage}</p>
                                        </Message> : null}
                                    </Modal.Content>
                                </Modal>
                                <Button inverted color='red' onClick={() => setDeleteopen(true)}>
                                    Delete Puppy
                                </Button>
                                <Confirm
                                    open={deleteopen}
                                    onCancel={() => setDeleteopen(false)}
                                    onConfirm={() => {
                                        deleteSpecificPuppy(puppy.id, setPuppy);
                                        setDeleteopen(false);
                                        window.location.href = "/";

                                    }}
                                />
                            </Card.Content>
                        </Card>

                    </div>
                </div>

            </div>
        </main>
    )






}
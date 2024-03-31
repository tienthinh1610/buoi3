import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, } from 'reactstrap';


const Hook2 = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                CLICK
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <Label for="examplePassword">
                                Password
                            </Label>
                        </FormGroup>
                        {' '}
                        <Button>
                            Submit
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Hook2




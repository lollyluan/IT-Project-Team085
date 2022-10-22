import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {postAdoptionApplication} from '../api/pet_adoption';

export default function ApplicationPopup(props) {
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e =>{
    postAdoptionApplication(props.id, {reason:application})
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Apply Now!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet adoption application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="application-popup"
              controlId="popup"
            >
              <Form.Label>Self introdunction of your own conditions, and reason for wanting to adopt~</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" id="application" onChange={setApplication}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
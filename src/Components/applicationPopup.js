import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {postAdoptionApplication} from '../api/pet_adoption';

export default function ApplicationPopup(props) {
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState({reason:""})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getApplication(e){
    const data={...application}
    data["reason"]= e.target.value
    setApplication(data)
    console.log(application)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    //const apply = {"reason":application}
    console.log(props.id)
    //console.log(apply)
    postAdoptionApplication(props.id, application)
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
              <Form.Control as='textarea' rows={5} value={application.reason} onChange={getApplication}/>
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
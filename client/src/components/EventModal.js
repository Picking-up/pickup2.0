import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class EventModal extends Component {

  render() {
    return(
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>TITLE HERE</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>BODY HERE</p>
        </Modal.Body>

        <Modal.Footer>
          <Button>BUTTON</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EventModal
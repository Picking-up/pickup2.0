import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideModal } from '../actions/eventModalInfo'

class EventModal extends Component {

  render() {
    return(
      <Modal show={false || this.props.showModal} onHide={this.props.hideModal}>
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

function mapStateToProps(state) {
  return {
    showModal: state.eventModal.display,
    eventDetails: state.eventModal.eventDetails
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);
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
          <Modal.Title>{this.props.eventDetails ? this.props.eventDetails.sports : null}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>location: {this.props.eventDetails ? this.props.eventDetails.location : null}</p>
          <p>players: {this.props.eventDetails ? this.props.eventDetails.players : null}</p>
          <p>Temp Date: {this.props.eventDetails ? new Date(this.props.eventDetails.updated_at).toString() : null}</p>
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
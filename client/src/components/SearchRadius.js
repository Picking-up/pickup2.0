import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import { getRadius } from '../actions/searchEvents';

class SearchRadius extends Component {


  render() {
    return (
      <ButtonToolbar id="dropdown">
        <DropdownButton  title={this.props.radius ? this.props.radius : "Search Radius"} noCaret id="dropdown-no-caret" onSelect={(eventKey) => {this.props.getRadius(eventKey)}}>
          <MenuItem eventKey={5}>5 Miles</MenuItem>
          <MenuItem eventKey={10}>10 Miles</MenuItem>
          <MenuItem eventKey={20}>20 Miles</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">something else</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    radius: state.event.eventRadius,
    coord: state.coord.coord
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRadius }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRadius);
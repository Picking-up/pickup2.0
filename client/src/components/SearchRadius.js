import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

class SearchRadius extends Component {


  render() {
    return (
      <ButtonToolbar id="dropdown">
        <DropdownButton  title={"Search Radius"} noCaret id="dropdown-no-caret" onSelect={(eventKey) => {console.log(typeof eventKey, eventKey)}}>
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

export default SearchRadius;
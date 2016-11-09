import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import { LinkContainer } from 'react-router-bootstrap';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="nav navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <li><Link to="/" className="navbar-brand">PickUp2.0</Link></li>
            </div>
            <div className="nav navbar-nav">
              <li id="searchbar"><Searchbar /></li>
              <li>  
                <ButtonToolbar id="dropdown" >
                  <DropdownButton  title="Search Radius" noCaret id="dropdown-no-caret" onSelect={(eventKey) => {console.log(eventKey)}}>
                    <MenuItem eventKey="1">5 Miles</MenuItem>
                    <MenuItem eventKey="2">10 Miles</MenuItem>
                    <MenuItem eventKey="3">20 Miles</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">something else</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>
              </li>
            </div>
            <div className="collapse navbar-collapse" id="bs-navbar-collapse">
                 <div className="nav navbar-nav navbar-right">
                   <li><Link to="SignIn">Sign In</Link></li>
                   <li><Link to="SignUp">Sign Up</Link></li>
               </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar

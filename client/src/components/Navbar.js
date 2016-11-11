import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import { LinkContainer } from 'react-router-bootstrap';
<<<<<<< 53eb979550076559c02d4f23dfdb407b7ea3001b
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
=======
import { connect } from 'react-redux';
>>>>>>> [CLIENTSIDEAUTH]add auth for sign in

class Navbar extends Component {
  navBarChange = () =>{
    if(!this.props.authenticated){
    return(
            <div className="nav navbar-nav navbar-right">
              <li><Link to="SignIn">Sign In</Link></li>
              <li><Link to="SignUp">Sign Up</Link></li>
            </div>
        )
    }
    return(
      <div className="nav navbar-nav navbar-right">
        <li><Link to="SignOut">Sign Out</Link></li>
      </div>
    )
  }
  render() {
    console.log('props', this.props.authenticated)
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
                  {this.navBarChange()}
                </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authentication
  }
}

export default connect(mapStateToProps)(Navbar)

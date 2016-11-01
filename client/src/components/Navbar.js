import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import { LinkContainer } from 'react-router-bootstrap';

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
              <li><Searchbar /></li>
              <li><Link>something else here</Link></li>
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

import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from './Searchbar';

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
              <li><Link><a>something else here</a></Link></li>
            </div>
            <div className="collapse navbar-collapse" id="bs-navbar-collapse">
              <div className="nav navbar-nav navbar-right">
                <li><a><Link>Sign In</Link></a></li>
                <li><a><Link>Sign Up</Link></a></li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar
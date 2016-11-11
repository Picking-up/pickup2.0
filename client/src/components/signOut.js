import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { signOutUser } from '../actions/signin';


class SignOut extends Component {
  componentWillMount(){
    this.props.dispatch(signOutUser())
    browserHistory.push('/SignIn')
  }
  render(){
    return(
      <div>
        Hope To See You Soon!
      </div>
    )
  }
}

export default connect()(SignOut)

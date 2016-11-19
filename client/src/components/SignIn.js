import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router';
import { signInUser } from '../actions/signin';
import validate from './SignInValidate';


class SignIn extends Component {

  onSubmit(props){
    this.props.dispatch(signInUser(props));
  }

  errorHandler(){
    if(this.props.errors ==
"Invalid email or password"){
      console.log('in here once again')
      return(
      <div>
        <strong>OOPS!</strong>{this.props.errors}
      </div>
    )
    }
  }
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return(
          <div>
            <input {...input} placeholder={label} type={type} className='form-control' id="inputdefault"/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>

        )
      }
  render(){
    const { handleSubmit, msg } = this.props

    return(
     <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='form-signIn'>
        <h2 className='form-header'>Please Sign In</h2>
          <Field component={this.renderField} type='username' name='username' label='username' placeholder='username'  />
          <Field type='password' name='password' component={this.renderField} label='password' placeholder='password'/>
          {this.errorHandler()}
        <button type='submit' className='btn btn-lg btn-primary btn-block'>submit</button>
      </form>
    </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log('this is the mapStateToProps', state.error.msg)
   return {errors: state.error.msg}
}




SignIn = reduxForm({
  form:'SignInForm',
  validate
})(SignIn)
SignIn = connect(mapStateToProps)(SignIn);

export default SignIn;

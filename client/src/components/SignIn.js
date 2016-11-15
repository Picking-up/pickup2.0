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
          <label>{label}</label>
          <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
          </div>
        )
      }
  render(){
    const { handleSubmit, msg } = this.props
    console.log(this.props.errors ==
"Invalid email or password",'this is the props error')
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field  className='form-control' name='username' component={this.renderField} label='username' placeholder='username'/>
        </div>

        <div>
          <Field  className='form-control' type='password' name='password' component={this.renderField} label='password' placeholder='password'/>
        </div>
          {this.errorHandler()}
        <button type='submit' className='btn btn-primary'>submit</button>
      </form>
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

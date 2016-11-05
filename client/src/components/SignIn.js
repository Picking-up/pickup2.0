import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import validate from './SignInValidate';


class SignIn extends Component {

  onSubmit(props){
    console.log('these are props', props);
    browserHistory.push('/home');
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
    const { handleSubmit } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field  className='form-control' name='username' component={this.renderField} label='username' placeholder='username'/>
        </div>

        <div>
          <Field  className='form-control' type='password' name='password' component={this.renderField} label='password' placeholder='password'/>
        </div>
        <button type='submit' className='btn btn-primary'>submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form:'SignInForm',
  validate
},null)(SignIn)

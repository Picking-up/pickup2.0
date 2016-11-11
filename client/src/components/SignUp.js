import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { newUser } from '../actions/signup';
import validate from './SignUpValidate'

class SignUp extends Component {

  onSubmit(props){
    console.log('these are the props', props)
    this.props.dispatch(newUser(props));
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
          <Field  className='form-control' name='username' component={this.renderField} label='username' placeholder='desired username'/>
        </div>

        <div>
          <Field className='form-control' type='password' name='password' component={this.renderField} label='password' placeholder='desired password'/>
        </div>

        <div>
          <Field className='form-control' type='password' name='confirmpassword' component={this.renderField} label='confirm password' placeholder='confirm password'/>
        </div>

        <div>
          <Field className='form-control' name='email' component={this.renderField} label='Email' placeholder='email'/>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    )
  }
}

export default reduxForm({
  form:'SignUpForm',
  validate
})(SignUp)

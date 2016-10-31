import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { PostEvent } from '../actions/post';
import { Link, browserHistory } from 'react-router';
import validate from './postValidate';

class UpdateGame extends Component {


  onSubmit(props){
    PostEvent(props);
    browserHistory.push('/home')
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
      const { handleSubmit } = this.props;
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Add Event</h3>

            <div>
              <Field  className='form-control' name='location' component={this.renderField} label='location' placeholder='location'/>
            </div>

            <div>
              <Field className='form-control' name='players' component={this.renderField} label='players' placeholder='number' />
            </div>

            <div>
              <Field className='form-control' name='sports' component={this.renderField} label='sports' placeholder='sports'/>
            </div>
            <div>
              <button type='submit' className='btn btn-primary'>Add</button>
              <Link to='/map' className='btn btn-primary'>cancel</Link>
            </div>
        </form>
    )
  }
}



export default reduxForm ({
  form: 'PostGame',
  validate
},null,{PostEvent})(UpdateGame)

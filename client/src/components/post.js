import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { PostEvent } from '../actions/post';
import { Link, browserHistory } from 'react-router';
import validate from './postValidate';

class UpdateGame extends Component {


  onSubmit(props){
    console.log(props,'this is the props')

  }
   renderInput = field =>{
     console.log('fields of error',field.meta.error)
   return(
      <div>
        <label>{field.label}</label>
        <input {...field.input} placeholder={field.placeholder} type={field.type}/>
        {field.touched && field.meta.error && <span>{field.meta.error}</span>}
      </div>
    )
  }

  render(){
      const { handleSubmit } = this.props;

    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Add Event</h3>
            <div>
              <Field    className='form-control' name='location' component={this.renderInput} label='location' placeholder='location'/>
            </div>

            <div>
              <Field className='form-control' name='players' component={this.renderInput} label='players' placeholder='number' />
            </div>

            <div>
              <Field className='form-control' name='sports' component={this.renderInput} label='sports' placeholder='sports'/>
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

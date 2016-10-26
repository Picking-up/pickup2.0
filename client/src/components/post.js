import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { PostEvent } from '../actions/post';
import { Link, browserHistory } from 'react-router';
import validate from './postValidate';
const { DOM: { input } } = React


class UpdateGame extends Component {

  onSubmit(props){
    console.log(props,'this is the props')
    PostEvent(props)
  }


  render(){
      const { handleSubmit } = this.props;
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <h3>Add Event</h3>

          <div>
            <Field name='location' component={location =>
            <div>
              <label>location</label>
              <input type='text' {...location} placeholder='location'/>
              {location.touched && location.error && <span className="error">{location.error}</span>}
            </div>
          }/>
        </div>

          <div>
            <label>sport</label>
            <Field name='sports' component='input' type='text'/>
          </div>

          <div>
            <label>players</label>
            <Field name='players' component='input' type='integer'/>
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

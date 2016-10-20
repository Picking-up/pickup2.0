import React, { Component } from 'react';
import { PostEvent } from '../actions/post';


export default class Post extends Component {
  constructor(props){
    super(props);
    this.state = {input:''}
  }

  onChange(e){
    console.log(e.target.value)
    this.setState({input:e.target.value});
    e.preventDefault();

  }

  onSubmit(value){
    console.log('submiting value:',value);
    console.log('state:',this.state.input)
    this.setState({input:''})
  }



  render(){
    return (
    <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <input placeholder='event' value={this.state.input} onChange={this.onChange.bind(this)}/>
        <button>place</button>
      </form>
    </div>
    )
  }
}

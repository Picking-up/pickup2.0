import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      searchQuery: ""
    }
  }

  onSearchSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchQuery)
  }

  onInputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }



  render() {
    return(
      <div>
        <form id="demo-2" onSubmit={this.onSearchSubmit}>
          <input type="search" value={this.state.searchQuery} onChange={this.onInputChange} />
        </form>
      </div>
    )
  }
}

export default Searchbar;
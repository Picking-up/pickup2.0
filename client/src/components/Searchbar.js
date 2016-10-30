import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchEvents } from '../actions/searchEvents';





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
    console.log("SEARCH QUERY: ", this.state.searchQuery)
    // console.log("CONVERTADDRESS: ", convertAddress(this.state.searchQuery));
    this.props.searchEvents(this.state.searchQuery);
  }

  onInputChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }



  render() {
    return(
      <div>
        <form id="searchbar" onSubmit={this.onSearchSubmit}>
          <input type="search" value={this.state.searchQuery} onChange={this.onInputChange} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchEvents }, dispatch);
}

// export default Searchbar;

export default connect(null, mapDispatchToProps)(Searchbar);
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => this.setState({term: event.target.value})

  render() {
    return (
      <div>
      <input
      value={this.state.term}
      onChange={this.handleChange} />
      <h1>{this.state.term}</h1>
      </div>
    )
  }

}
export default SearchBar;

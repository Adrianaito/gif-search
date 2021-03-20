import React, { Component } from 'react';
// rcc tab
export default class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifList } = this.props;
    changeGifList(event.currentTarget.value);
  }
  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

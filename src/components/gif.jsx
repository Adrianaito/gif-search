import React, { Component } from 'react';
// rcc tab
export default class Gif extends Component {

  handleClick = () => {
    const { gifId, changeSelectedGif } = this.props;
    changeSelectedGif(gifId);
  }

  render() {
    const { gifId} = this.props
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={url} className="gif" onClick={this.handleClick} alt="gif"/>
    );
  }
}

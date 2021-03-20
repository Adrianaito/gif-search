import React, { Component } from 'react';
import Gif from "./gif"
// rcc tab
export default class GifList extends Component {
  render() {
    const { gifIds, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        { gifIds.map((gifId) => <Gif gifId={gifId} key={gifId} changeSelectedGif={changeSelectedGif} />)}
      </div>
    );
  }
}

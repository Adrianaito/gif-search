import React, { Component } from 'react';
import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

const giphy = require('giphy-api')({
  apiKey: '6RJRXMRnEZXyx10inDpgppekC85ERLvK',
  https: true
});

// rcc tab
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     gifId: "gG6OcTSRWaSis",
     gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({
      gifId: newGifId
    });
  }

  changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIds: res.data.map(gif => gif.id)
      });
    });
  }

  render() {
    const { gifId, gifIds } = this.state;
    return (
      <div className="wrapper">
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif gifId={gifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

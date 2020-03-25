// src/index.js
import React, { Component } from 'react';

import Gif from './gif';
import Gifs from './gifs';
import Search from './search';

const giphy = require('giphy-api')('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm');

class App extends Component { // A stateful component needs to

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedId: "Y2KnlbmibtNjq"
    };

    // this.search('disney');
  }

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g',
      limit: 5
    }, (err, res) => {
      // Res contains gif data!
      this.setState({ gifs: res.data });
    });
  };

  selectGif = (id) => {
    this.setState({
      selectedId: id
    });

    console.log(id);
  }

  render() {
    // Search with options using callback
    return (
      <div className="container">
        <div className="row">
          <div className="left-scene">
              <Search searchFunction={this.search} />
            <div className="selected-gif align-items-center justify-items-center justify-content-center">
              <Gif id={this.state.selectedId} />
            </div>
          </div>
          <div className="right-scene">
            <Gifs gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

    // selectGif={this.selectGif}

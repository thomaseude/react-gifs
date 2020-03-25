import React, { Component } from 'react';

import Gif from './gif';

class Gifs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />)}
      </div>
    );
  }
}

export default Gifs;


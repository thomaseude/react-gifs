import React, { Component } from 'react';

class Gif extends Component {


  constructor(props) {
    super(props);
    this.state = { };
  }

  handleClick = () => {
    this.props.selectGif(this.props.id);
  }


  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <div>
        <img src={src} alt="GIF" className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;

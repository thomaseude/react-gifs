import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={this.handleUpdate} placeholder="Tap a GIF's" aria-label="Tap a GIF's" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
        </div>
      </div>
    );
  }
}

export default Search;

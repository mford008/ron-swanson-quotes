import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  render() {
    return(
        <div className="Gif">
            <img src={this.props.gif.images.fixed_width_downsampled.url}></img>
        </div>
    )
  }
}

export default Gif;
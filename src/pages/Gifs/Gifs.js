import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import './Gifs.css';
import Gif from '../../components/Gif/Gif';

class Gifs extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=ron+swanson&api_key=${process.env.REACT_APP_API_KEY}&limit=100`)
      .then(response => response.json())
      .then(data =>  {
        console.log((data.data[0]));
        this.setState({ gifs: data.data })
        console.log(typeof(this.state.gifs), this.state.gifs);
      });
  }

  render() {
    const childGifs = this.state.gifs.map((gif, id) => (
        <Gif gif={gif}></Gif>
    ));
    return (
        <Masonry>
          {childGifs}
        </Masonry>
    );
  }
}

export default Gifs;

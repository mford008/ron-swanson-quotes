import React, { Component } from 'react';

class Gifs extends Component {
  state = {
    image: ''
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=ron+swanson&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data =>  {
        // Select random index for gif in gifs
        const i = Math.floor(10 * Math.random());
        console.log(data.data[i].images);
        this.setState({ image: data.data[i].images.original.url })
      });
  }

  render() {
    return (
      <div className="Gifs">
        <img src={this.state.image} />
      </div>
    );
  }
}

export default Gifs;

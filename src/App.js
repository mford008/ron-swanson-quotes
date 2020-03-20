import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    quote: '',
    image: ''
  }

  componentDidMount() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({ quote: data[0] })
      });
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
      <div className="App">
        <p>{ this.state.quote }</p>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default App;

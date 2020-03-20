import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    quote: ''
  }

  componentDidMount() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({ quote: data[0] })
      });
  }

  render() {
    return (
      <div className="App">
        { this.state.quote }
      </div>
    );
  }
}

export default App;

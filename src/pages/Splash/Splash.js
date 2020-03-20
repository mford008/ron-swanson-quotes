import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
  state = {
    quote: '',
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
      <div className="Splash">
        <p className="Splash-Quote">{ this.state.quote }</p>
      </div>
    );
  }
}

export default Splash;

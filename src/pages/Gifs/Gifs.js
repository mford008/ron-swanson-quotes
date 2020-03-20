import React, { Component } from 'react';

class Gifs extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=ron+swanson&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data =>  {
        console.log((data.data[0]));
        this.setState({ gifs: data.data })
        console.log(typeof(this.state.gifs), this.state.gifs);
      });
  }

  render() {
    return (
      <div className="Gifs">
        {
          this.state.gifs.map((gif, id) => (
            <img src={ gif.images.fixed_width.url } key="id" />
          ))
        }
      </div>
    );
  }
}

export default Gifs;

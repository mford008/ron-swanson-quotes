import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';

import './Gifs.css';
import Gif from '../../components/Gif/Gif';

const Gifs = () => {
  const [state, setState] = useState({
    gifs: [],
  });
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=ron+swanson&api_key=${process.env.REACT_APP_API_KEY}&limit=150`)
      .then(response => response.json())
      .then(data =>  {
        setState({ gifs: data.data })
      });
  }, []);

    const childGifs = state.gifs.map((gif, id) => (
        <Gif key={id} gif={gif}></Gif>
    ));
    return (
        <Masonry className="Gifs" options={{fitWidth: true}}>
          {childGifs}
        </Masonry>
    );
}

export default Gifs;

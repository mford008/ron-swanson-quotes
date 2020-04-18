import React from 'react';
import './Gif.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Gif = (props) => {
  return(
    <div className="GifContainer">
      <div className="Gif">
          <img src={props.gif.images.fixed_width_downsampled.url}></img>
      </div>
      <div className="Gif__ButtonsContainer">
        <CopyToClipboard className="Gif__ButtonContainer--copy" text={props.gif.images.fixed_width_downsampled.url}>
          <button className="Gif__Button">Copy</button>
        </CopyToClipboard>
        <div className="Gif__ButtonContainer--favorite">
          <button className="Gif__Button">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default Gif;
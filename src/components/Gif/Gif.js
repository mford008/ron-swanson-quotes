import React, { Component } from 'react';
import './Gif.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';


class Gif extends Component {
  state = {
    showCopyNote: false,
  }

  showCopied = () => {
    this.setState({
      showCopyNote: true,
    })
    setTimeout(() => {
      this.setState({showCopyNote: false});
    }, 2000)
  }

  render() {
    return (
      <div className="GifContainer">
      <div className="Gif">
          <img alt="" src={this.props.gif.images.fixed_width.url}></img>
      </div>
      <div className="Gif__ButtonsContainer">
        <CopyToClipboard className="Gif__ButtonContainer--copy" text={this.props.gif.images.fixed_width.url}>
          <button className="Gif__Button" onClick={this.showCopied}>{this.state.showCopyNote ? 'Link Copied!' : 'Copy' }</button>
        </CopyToClipboard>
        {/* TODO: add "Add to Favorites" when user authentication is implemented */}
        {/* <div className="Gif__ButtonContainer--favorite">
          <button className="Gif__Button">Add to Favorites</button>
        </div> */}
      </div>
    </div>
    )
  }
}

export default Gif;
// dependencies
import React, { Component } from 'react';

export class ImageCard extends Component {
  render() {
    return (
      <img src={this.props.url} alt={this.props.name}/>
    )
  }
}

export default ImageCard;

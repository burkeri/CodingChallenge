// dependencies
import React, { Component } from 'react'

// components
import ImageCard from "../components/ImageCard";

export class Home extends Component {
  render() {
    return (
      <div>
        {this.props.images.map(img => (
          <ImageCard 
            name={img.name}
            url={img.url}
          />
        ))}
      </div>
    )
  }
}

export default Home;


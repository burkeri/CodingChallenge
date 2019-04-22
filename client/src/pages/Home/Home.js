// dependencies
import React, { Component } from 'react';

// import files
import "./home.css";

// components
import ImageCard from "../../components/ImageCard/ImageCard";

export class Home extends Component {

  // transformItem = (name) => {
  //   this.props.images.map(img => img.name === name ? img.clicked = true : false );
  // }

  render() {
    return (

      <div className="container" >

        {this.props.images.map(img => (

          <div
            className="item"
            // onClick={this.transformItem(img.name)}
            clicked={img.clicked}
          />

        ))}

      </div>
    )
  }
}

export default Home;


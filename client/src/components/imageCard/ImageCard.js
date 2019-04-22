import React, { Component } from "react";

import "../../App.css";

export class ImageCard extends Component {
  state = {
    itemClass: "item"
  };

  addClass = e => {
    console.log(e.target);
    e.target.classList.add("hover");
  };
  removeClass = e => {
    e.target.classList.remove("hover");
  };

  render() {

    function test() { if (this.props.clicked) {console.log("hello!")} };

    return (
      <div 
        className={this.state.itemClass} 
        // onMouseLeave={this.removeClass}
        onMouseEnter={() => this.props.changeClicked(this.props.name)}
        onMouseCapture={test()}
        id={this.props.id}
      />
    );
  }
}

export default ImageCard;

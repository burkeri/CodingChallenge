import React, { Component } from "react";

import "../../App.css";

export class ImageCard extends Component {
  state = {
    itemClass: "item"
  };

  addClass = e => {
    console.log(e.target);
    // e.target.classList.add("hover");
  };

  removeClass = e => {
    e.target.classList.remove("hover");
  };


  onClick = (boolean) => {
    if (boolean) {
    }
  }

  handleHover = (func, param, bool) => {
    func(param);
    if (bool) {
      this.card.classList.add("hover")
    }
  }
  handleHover = () => {
    let cards = document.getElementsByClassName(this.state.itemClass);

    for (let i=0; i<cards.length; i++) {
      let c = cards[0];
      while(c) {
        if(c.tagName === "DIV") {
          c.classList.remove("hover");
        }
        c = c.nextSibling;
      }
      this.card.classList.add("hover");
    }
  }

  componentDidMount() {
    if (this.card.id === "item1") {
      this.card.classList.add("hover");
    }
  }

  render() {

    return (
      <div
        ref={(div)=>{this.card = div}}
        className={this.state.itemClass} 
        onMouseEnter={this.handleHover}
        id={this.props.id}
      />
    );
  }
}

export default ImageCard;

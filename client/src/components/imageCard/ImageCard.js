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

  addClassCallback = (e, boolean) => {
    if (boolean) {
      console.log(e.target);
    }
  }

  onClick = (boolean) => {
    if (boolean) {
      this.card.classList.add("hover")
    }
  }

  render() {

    return (
      <div
        ref={(div)=>{this.card = div}}
        className={this.state.itemClass} 
        // onMouseLeave={this.removeClass}
        onMouseOut={() => this.props.changeClicked(this.props.name)}
        onClick={() => this.onClick(this.props.clicked)}
        id={this.props.id}
      />
    );
  }
}

export default ImageCard;

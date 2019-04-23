// dependencies
import React, { Component } from "react";

// components
import Image from "../Image/Image";

export class ImageCard extends Component {
  state = {
    itemClass: "item"
  };

  // onmouseenter - image card will add class "hover", "hover" will be removed from siblings
  changeTopRow = () => {
    let cards = document.getElementsByClassName(this.state.itemClass);

    let c = cards[0];

    while (c) {
      if (c.tagName === "DIV") {
        c.classList.remove("hover");
      }
      c = c.nextSibling;
    }
    this.card.classList.add("hover");
  };

  // onmouseenter - image card will add class "hover", "hover" will be removed from siblings
  changeBottomRow = () => {
    let cards = document.getElementsByClassName(this.state.itemClass);

    let c = cards[9];

    while (c) {
      if (c.tagName === "DIV") {
        c.classList.remove("hover");
      }
      c = c.nextSibling;
    }
    this.card.classList.add("hover");
  };

  // specifies which function is applied to which collection of elements
  handleHover = () => {
    switch (this.card.id) {
      case "item1":
      case "item2":
      case "item3":
      case "item4":
      case "item5":
      case "item6":
      case "item7":
      case "item8":
      case "item9":
        this.changeTopRow();
        break;

      case "item10":
      case "item11":
      case "item12":
      case "item13":
      case "item14":
      case "item15":
      case "item16":
      case "item17":
      case "item18":
        this.changeBottomRow();
        break;

      default:
        break;
    }
  };

  // applies "hover" class to the first item in grid 1 and last item in grid 2
  componentDidMount() {
    if (this.card.id === "item1") {
      this.card.classList.add("hover");
    }
    if (this.card.id === "item18") {
      this.card.classList.add("hover");
    }
  }

  render() {
    return (
      <div
        ref={div => {
          this.card = div;
        }}
        className={this.state.itemClass}
        onMouseEnter={this.handleHover}
        id={this.props.id}
      >
        <Image
          name={this.props.name}
          url={this.props.url}
        />
      </div>
    );
  }
}

export default ImageCard;

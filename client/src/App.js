// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import files
import API from "../src/utils/API";
import "./css/index";

// pages
import NoMatch from "./pages/noMatch/NoMatch";

// components
import ImageCard from "./components/imageCard/ImageCard";

class App extends Component {
  state = {
    arr1: [],
    arr2: [],
    itemClass: "item",
    hoverClass: "item hover"
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    API.getImages().then(res => {
      let arr1 = res.data.slice(0, 9);
      let arr2 = res.data.slice(9, 18);

      this.setState({
        arr1: arr1,
        arr2: arr2
      });
    });
  };

  // addClass = (e) => {
  //   console.log(e.target);

  // }

  // removeClass = (e) => {
  //   e.target.classList.remove("hover");
  // }

  // checkTopRow = () => {
  //   for(let i=0; i <= (this.state.images.length/2); i++) {
  //     if(!this.state.images[i].clicked) {
  //       this.state.images[i] = true;
  //       console.log("set true!");

  //     }
  //     else {
  //       this.state.images[i] = false;
  //       console.log("set false!");

  //     }
  //   }
  // }

  /*
  onmouseover loop through the first half of the images array
  check if the one you are hovering over has a clicked attribute of false
  if it does set it to true
  now look through the entire half of that array again
  check if any other elements have the clicked attribute set to true
  if they do, set the clicked attribute to false
  */

  // changeClicked = name => {
  //   this.state.arr1.map(img =>
  //     img.name === name ? (img.clicked = true) : (img.clicked = false)
  //   );
  //   this.state.arr2.map(img =>
  //     img.name === name ? (img.clicked = true) : (img.clicked = false)
  //   );
  //   this.setState(
  //     { 
  //       arr1: this.state.arr1,
  //       arr2: this.state.arr2
  //     });
  //     console.log(this.state.arr1);
  //     console.log(this.state.arr2);
      
  // };

  // handleHover = name => {
  //   this.changeClicked(name);
  // };

  render() {
    let i = 1;
    let j = 10;

    return (
      <Router>
        <Switch>
          {/* home render */}
          <Route
            exact
            path="/"
            render={() => [
              <div className="container">
                {this.state.arr1.map(img => (
                  <ImageCard
                    class={this.state.itemClass}
                    name={img.name}
                    handleHover={this.handleHover}
                    clicked={img.clicked}
                    id={`item${i++}`}
                  />
                ))}
              </div>,
              <div className="container">
                {this.state.arr2.map(img => (
                  <ImageCard
                    class={this.state.itemClass}
                    name={img.name}
                    handleHover={this.handleHover}
                    clicked={img.clicked}
                    id={`item${j++}`}
                  />
                ))}
              </div>

            ]}
          />

          {/* 404 render */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

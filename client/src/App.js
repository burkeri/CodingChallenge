// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import files
import API from "../src/utils/API";
import "./css";

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
                    url={img.url}
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
                    url={img.url}
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

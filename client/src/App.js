// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import API functionality
import API from "../src/utils/API";
// import styles
import "./css";

// pages
import NoMatch from "./pages/noMatch/NoMatch";

// components
import ImageCard from "./components/imageCard/ImageCard";

class App extends Component {
  
  state = {
    arr1: [],
    arr2: []
  };

  // populate images on component mount
  componentDidMount() {
    this.getImages();
  }

  // grab images from API, split in half and set state to 2 arrays
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

              // grid 1
              <div className="container">
                {this.state.arr1.map(img => (
                  <ImageCard
                    name={img.name}
                    url={img.url}
                    id={`item${i++}`}
                  />
                ))}
              </div>,

              // grid 2
              <div className="container">
                {this.state.arr2.map(img => (
                  <ImageCard
                    name={img.name}
                    url={img.url}
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

// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import files
import API from "../src/utils/API";
import "./App.css";

// pages
import NoMatch from "./pages/noMatch/NoMatch";

// components
import ImageCard from "./components/imageCard/ImageCard";
import Image from "./components/Image/Image";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    API.getImages().then(res => {
      this.setState({
        images: res.data
      });
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          {/* home render */}
          <Route
            exact path="/"
            render={() => (
              <div className="container">
                {this.state.images.map(img => (
                  <ImageCard />
                ))}
              </div>
            )}
          />

          {/* 404 render */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

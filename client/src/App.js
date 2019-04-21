// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import files
import API from "../src/utils/API";

// pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

class App extends Component {

  state = {
    images: []
  }

  getImages = () => {
    API.getImages().then(res => {
      this.setState(
        {
          images: res.data
        }
      )
    })
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route 
            exact path="/"
            render={() => (
              <Home
                images={this.state.images}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
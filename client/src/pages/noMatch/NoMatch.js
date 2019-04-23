// dependencies
import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <div className="left">
        <h1>404</h1>
        <h2>
          Return <Link to="/">home</Link> to avenge the fallen.
        </h2>
      </div>
      <div className="black" />
      <div className="right">
        <img id="full" src="https://i.imgur.com/vFEudrqg.jpg" />
      </div>
    </div>
  );
}

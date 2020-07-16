import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>OOPS The page doesn't exists</p>
      <Link to="/" className = "secondary-cta">Go to home</Link>
    </div>
  );
}

export default NoMatch;

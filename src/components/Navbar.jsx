import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="load">
          <ul className="navbar">
            <li className="items">
              <Link to="/">Home</Link>
            </li>
            <li className="items">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
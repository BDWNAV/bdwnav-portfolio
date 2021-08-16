import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="load">
          <ul className="navbar">
            <li className="items"><a href="/">Home</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
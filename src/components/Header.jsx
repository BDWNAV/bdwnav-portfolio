import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="load header">
          <h1 className="move">Hi I'm bdwnav</h1>
          <p className="move"><i>I like to code stuff.</i></p>
          <div className="load">
            <button className="github"><a href="https://github.com/BDWNAV" style={{color: "inherit", textDecoration: "none"}}>GitHub</a></button>
          </div>
        </div>
      </div>
    )
  }
}
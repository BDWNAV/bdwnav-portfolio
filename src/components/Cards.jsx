import React from "react";

export default class Cards extends React.Component {
  render() {
    return (
      <div className="load">
        <div className="card">
          <h1>{this.props.project}</h1>
          <p className="test">{this.props.description}</p>
          <p><button><a href="https://github.com/BDWNAV/" style={{textDecoration: "none", color: "inherit"}}>Contact me</a></button></p>
        </div>
      </div>
    )
  }
}
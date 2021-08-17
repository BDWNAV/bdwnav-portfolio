import React from "react";

export default class Cards extends React.Component {
  render() {
    return (
      <div className="load">
        <div className="card-container">
          <div className="card">
            <img src={this.props.image} alt="Github" style={{width: "100%"}} />
            <h2>{this.props.project}</h2>
            <p>{this.props.description}</p>
            <p><button className="card-button"><a href={this.props.projectUrl} style={{textDecoration: "none", color: "inherit"}}>Repository</a></button></p>
          </div>
        </div>
      </div>
    )
  }
}
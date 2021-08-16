import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cards project="Test" description="Does this work"/>
      </div>
    )
  }
}
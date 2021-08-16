import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}
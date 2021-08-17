import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="load about-me-content">
          <h1 style={{textAlign: "center"}}>About me</h1>
          <p style={{marginLeft: "10px"}}>Hi i'm bdwnav but you can also call me Nav, I currently mainly code websites with React and html <i>(This website is coded in React if you were wondering!) </i> and sometimes I also code discord bots. I would say I'm alright at front end and backend, but that's just what I think if I had to choose from the two I would pick backend.
          Other than coding I like to play games such as minecraft or splitgate, and sometimes going out for a walk but other than that I mainly code <i>(I know I'm a pretty boring man)</i>.
          If you'd like to check out some of my projects make sure to check out my <a href="https://github.com/BDWNAV">GitHub</a> If you need to contact me for what ever reason please contact me at my <a href="mailto:nav@bdwnav.tech">email</a> or my discord Nav#8153 and I will try and get back to you as soon as humanly possible.
          </p> 
        </div>
        <footer className="load copyright">© 2021 Bdwnav</footer>
      </div>
    );
  }
}
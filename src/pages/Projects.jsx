import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="load">
          <Navbar />
          <Cards image="https://cdn.discordapp.com/avatars/864059738789904384/44fe03349d6103b53b06bc967a1fab8b.webp?size=256" project="Jar-utilities" description="Jar-utilities is a discord bot for my up comming community server." projectUrl="https://github.com/BDWNAV/Jar-utilities" /> 
          <Cards image="https://cdn.discordapp.com/avatars/864059738789904384/44fe03349d6103b53b06bc967a1fab8b.webp?size=256" project="Jar hangout website" description="Jar hangout website is a website for my up comming community server." projectUrl="https://github.com/BDWNAV/jar-hangout-website" />
        </div>
        <Footer />
      </div>
    )
  }
}
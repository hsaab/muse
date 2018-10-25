import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="px4 pt4">
        <div className="video-container">
          <video autoPlay muted loop
            src={require("../assets/Muse_Video.mp4")}>
          </video>
        </div>
        <div className="row justify-between mb4">
          <div className="row flex align-middle">
            <img className="logo" alt="" src={require("../assets/muse_logo.png")}/>
            <img className="logo pl3" alt="" src={require("../assets/beat.png")}/>
          </div>
        </div>
        <span className="white pt4 pl3" style={{fontSize: '5vh'}}>Success! Expect an email whenever your favorite artists will be in your city!</span>
        <div className="row justify-center pt2 mt4">
          <Link className="btn works" to="/">Go Back to Home Page</Link>
        </div>
      </div>
    );
  }
}

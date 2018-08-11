import React, { Component } from "react";
import Navbar from "./navbar.js";

export default class Landing extends Component {
  render() {
      return (
        <div className="px4 pt4 z5">
          <div className="video-container">
            <video autoPlay muted loop
              src={require("../assets/Muse_Video.mp4")}>
            </video>
          </div>
          <Navbar scrollDown={this.props.scrollDown}/>
          <div className="white pt4 pl3" style={{fontSize: '5vh'}}>Never miss <strong>your</strong> favorite artists again when they're in <strong>your</strong> city</div>
          <div className="row justify-center pt2 mt4">
            <a className="btn works" onClick={() => this.props.scrollMiddle()}>See how it works</a>
          </div>
        </div>
      );
  }
}

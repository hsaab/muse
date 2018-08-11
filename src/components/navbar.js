import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
      return (
          <div className="row justify-between">
            <div className="row flex align-middle">
              <img className="logo" alt="" src={require("../assets/muse_logo.png")}/>
              <img className="logo pl3" alt="" src={require("../assets/beat.png")}/>
            </div>
            <a className="btn get-started-1" onClick={() => this.props.scrollDown()}>Get started</a>
          </div>
      );
  }
}

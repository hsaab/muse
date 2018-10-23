import React, { Component } from "react";
import Navbar from "./navbar.js";
import Box from "./box.js";

export default class SignUp extends Component {
  render() {
      return (
          <div className="px4 pt4">
            <Navbar scrollDown={() => this.props.scrollDown()}/>
            <div className="container-narrow">
              <div className="flex row justify-around">
                <Box/>
                <div className="flex flex-column sign-up-text-cont">
                  <div className="white sign-up-text">We send the concerts you'll love, near you</div>
                  <div className="white mt3 sign-up-text">Never miss your favorite artists again!</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr2" style={{marginTop: '13vh'}}>
              <div className="pb3">
                <span className="white">Powered by:</span>
                <div className="row mt2 items-center justify-center">
                  <img className="spotify-company" alt="" src={require("../assets/spotify_white.png")}/>
                  <img className="ticket-company ml2 mr2" alt="" src={require("../assets/ticketmaster.png")}/>
                  <img className="google-company" alt="" src={require("../assets/google.png")}/>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

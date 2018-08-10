import React, { Component } from "react";
import Navbar from "./navbar.js";
import Box from "./box.js";

export default class SignUp extends Component {
  render() {
      return (
          <div className="px4 pt4">
            <Navbar/>
            <div className="container-narrow">
              <div className="flex row justify-around">
                <Box/>
                <div className="flex flex-column sign-up-text-cont">
                  <div className="white sign-up-text">We send you concerts near you for your favorite artists</div>
                  <div className="white mt3 sign-up-text">So you’ll always be in the know</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <span className="white mt2">Powered by:</span>
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

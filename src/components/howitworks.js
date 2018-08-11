import React, { Component } from "react";
import Navbar from "./navbar.js";
import Item from "./item.js";

const step1 = "We integrate with Spotify to determine who your top artists have been over the past 6 months";
const step2 = "Based on your list of favorite artists (updated daily), we will find out if they are playing near you";
const step3 = "We’ll send you an email three weeks before the concert date with a link to buy tickets";

export default class howitworks extends Component {
  render() {
      return (
        <div className="px4 pt4 z5">
          <Navbar scrollDown={() => this.props.scrollDown()}/>
          <div className="mt4 flex justify-center row" style={{width: '100%'}}>
            <Item text={step1} pic={require("../assets/dj.png")}/>
            <Item text={step2} pic={require("../assets/location.png")}/>
            <Item text={step3} pic={require("../assets/ticket.png")}/>
          </div>
          <div className="flex justify-center mt4">
            <a className="btn sign-up center" onClick={() => this.props.scrollDown()}>Sign Up</a>
          </div>
        </div>
      );
  }
}

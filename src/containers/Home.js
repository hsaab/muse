import React, { Component } from "react";
import { connect } from "react-redux";
import Landing from "../components/landing.js";
import Howitworks from "../components/howitworks.js";
import SignUp from "../components/signup.js";
import scrollToComponent from "react-scroll-to-component";

class Home extends Component {
  scrollToBottom() {
    scrollToComponent(this.bottom, { offset: 0, align: "top", duration: 500 });
  }

  scrollToMiddle() {
    scrollToComponent(this.middle, { offset: 0, align: "top", duration: 500 });
  }

  render() {
    return (
      <div>
        <section
          ref={section => {
            this.top = section;
          }}
        >
          <Landing
            scrollDown={() => this.scrollToBottom()}
            scrollMiddle={() => this.scrollToMiddle()}
          />
        </section>
        <section
          ref={section => {
            this.middle = section;
          }}
        >
          <Howitworks
            scrollDown={() => this.scrollToBottom()}
            />
        </section>
        <section
          className="bg-concert"
          ref={section => {
            this.bottom = section;
          }}
        >
          <SignUp
            scrollDown={() => this.scrollToBottom()}
            />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

export default connect(mapStateToProps)(Home);

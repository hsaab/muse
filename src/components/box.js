import React, { Component } from "react";
import Field from "./field.js";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      location: ''
    }
  }

  render() {
      return (
        <div className="white box flex flex-column mt3 left">
          <div className="mt4">
            <div className="mb3 sign-up-text">
              Sign Up
            </div>
            <Field
              name="email"
              label="Email"
              placeholder="Email"
              defaultValue={this.state.email}
              onBlur={e => this.setState({ email: e.target.value.trim() })}
              onChange={e => this.setState({ email: e.target.value })}
              className="mb3"
              />
              <Field
                name="location"
                label="Location"
                placeholder="Location"
                defaultValue={this.state.location}
                onBlur={e => this.setState({ location: e.target.value.trim() })}
                onChange={e => this.setState({ location: e.target.value })}
                className="mb3"
                />
          </div>
          <div className="flex flex-column justify-center items-center">
            <a style={{width: '90%'}} className="btn submit mt2">
              <span className="center">Integrate with</span>
              <img className="spotify ml1" src={require("../assets/spotify_black.png")} alt=""/>
            </a>
            <a style={{width: '90%'}} className="btn submit mt3">Subscribe</a>
          </div>
        </div>
      );
  }
}

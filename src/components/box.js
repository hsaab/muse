import React, { Component } from "react";
import Field from "./field.js";
import * as API from "../API";

export default class Box extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      location: '',
      error: ''
    }
    this.test = API.test.bind(this);
    this.login = API.login.bind(this);
  }

  subscribe() {
    let test = this.test(this.state.email, this.state.location);
    if(test.success && test.existing) {
      this.setState({ error: "You already have signed up for this location!" });
    } else if (test.success && !test.existing) {
      this.login();
    } else {
      this.setState({ error: "There was an error signing you up. Please check back later!" });
    }
  }

  render() {
      return (
        <div className="white box flex flex-column mt3 left">
          <div className="mt4">
            <div className="mb3 sign-up-text">
              Sign Up
            </div>
            {this.state.error.length > 1 && (
              <span className="bold bigger2">{this.state.error}</span>
            )}
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
              <span className="center" onClick={() => this.subscribe()}>Subscribe</span>
            </a>
          </div>
        </div>
      );
  }
}

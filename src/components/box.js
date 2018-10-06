import React, { Component } from "react";
import Field from "./field.js";
import * as API from "../API";

export default class Box extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      location: '',
      error: '',
      name: '',
    }
    this.test = API.test.bind(this);
  }

  login(name, email, location) {
    window.location.href = `https://muse-flying-monkey.herokuapp.com/spotify/login?email=${email}&location=${location}&name=${name}`;
  }

  refresh(email, location) {
    window.location.href = `https://muse-flying-monkey.herokuapp.com/spotify/refresh?email=${email}&location=${location}`;
    console.log("Refreshing");
  }

  async subscribe(e) {
    e.preventDefault();
    let email = this.state.email;
    let location = this.state.location;
    let name = this.state.name;
    try {
      const test = await this.test(email, location);
      if(test.success && test.existing) {
        this.setState({ error: "You already have signed up for this location!" });
      } else if (test.success && !test.existing) {
        this.login(email, location, name);
      } else {
        this.setState({ error: "There was an error signing you up. Please check back later!" });
      }
    } catch (error) {
      console.log(error);
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
            name="name"
            label="First Name"
            placeholder="First Name"
            defaultValue={this.state.name}
            onBlur={e => this.setState({ name: e.target.value.trim() })}
            onChange={e => this.setState({ name: e.target.value })}
            className="mb3"
            />
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
            <span className="center" onClick={(e) => this.subscribe(e)}>Subscribe</span>
          </a>
        </div>
      </div>
    );
  }
}

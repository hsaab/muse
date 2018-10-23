import React, { Component } from "react";
import ReactLoading from "react-loading";
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
      loading: false
    }
    this.test = API.test.bind(this);
  }

  login(name, email, location) {
    window.location.href = `https://muse-flying-monkey.herokuapp.com/spotify/login?email=${email}&location=${location}&name=${name}`;
  }

  async subscribe(e) {
    e.preventDefault();
    this.refs.btn.setAttribute("disabled", "disabled");
    this.setState({ loading: true });
    let email = this.state.email;
    let location = this.state.location;
    let name = this.state.name;
    try {
      const test = await this.test(email, location);
      if(test.success && test.existing) {
        this.setState({ error: "You already have signed up for this location!", loading: false });
      } else if (test.success && !test.existing) {
        this.login(name, email, location);
      } else {
        this.setState({ error: "There was an error signing you up. Please check back later!", loading: false });
      }
    } catch (error) {
      this.setState({ loading: false, error: "There was an error signing you up. Please check back later!" });
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
            label="City"
            placeholder="City"
            defaultValue={this.state.location}
            onBlur={e => this.setState({ location: e.target.value.trim() })}
            onChange={e => this.setState({ location: e.target.value })}
            className="mb3"
            />
        </div>
        <div className="flex flex-column justify-center items-center">
          { this.state.loading ?
            <ReactLoading type='bars' color='white' height='15%' width='15%'/>
            :
            <button
              style={{width: '90%'}}
              className="btn submit mt2"
              onClick={(e) => this.subscribe(e)}
              ref="btn">
              Subscribe
            </button>
          }
        </div>
      </div>
    );
  }
}

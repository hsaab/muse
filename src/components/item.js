import React, { Component } from "react";

export default class item extends Component {
  render() {
      return (
          <div className="flex items-center mt3" style={{width: '75%'}}>
            <img className="icon" alt="" src={this.props.pic}/>
            <div className="white ml3 how-text">{this.props.text}</div>
          </div>
      );
  }
}

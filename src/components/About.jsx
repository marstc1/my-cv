import React, { Component } from "react";

export default class About extends Component {
  render() {
    let aboutData = this.props.aboutData;

    return (
      <section id="about">
        <div className="row text-left">
          <div className="three columns" />
          <div className="nine columns">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row text-left">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns">
            <p>{aboutData.personalStatement}</p>
            <p>{aboutData.personalStatementExtended}</p>
          </div>
        </div>
      </section>
    );
  }
}

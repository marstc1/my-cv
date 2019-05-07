import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    let aboutData = this.props.aboutData;

    return (
      <section id="contact">
        <div className="row">
          <h2>Contact Information</h2>
        </div>
        <div className="row text-left">
          <div className="three columns">
            <h3>Email</h3>
          </div>
          <div className="nine columns">
            <ul>
              {aboutData.email &&
                aboutData.email.map(item => {
                  return (
                    <li>
                      <strong>{item.label}:</strong> {item.address}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="row text-left">
          <div className="three columns">
            <h3>Telephone</h3>
          </div>
          <div className="nine columns">
            <ul>
              {aboutData.telephone &&
                aboutData.telephone.map(item => {
                  return (
                    <li>
                      <strong>{item.label}:</strong> {item.number}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="row text-left">
          <div className="three columns">
            <h3>Address</h3>
          </div>
          <div className="nine columns">
            <p>
              {aboutData.address.houseNumber} {aboutData.address.streetName}
              <br />
              {aboutData.address.village}
              <br />
              {aboutData.address.county} <br />
              {aboutData.address.postCode}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">
        <div>
          <div className="row">
            <h2>Curriculum Vitae</h2>
          </div>
          <div className="row text-left border-bottom-sm">
            <div className="three columns">
              <h3>
                <span>EXPERIENCE</span>
              </h3>
            </div>
            <div className="nine columns">
              {resumeData.education &&
                resumeData.experience.map(item => {
                  return (
                    <div className="work">
                      <h4>
                        {item.role} - {item.from} - {item.to}
                      </h4>
                      <h5 className="info">
                        {item.company}, {item.location}
                      </h5>

                      {item.responsibilities.length > 0 && (
                        <div>
                          <h6>Responsibilities</h6>
                          <ul className="circle">
                            {item.responsibilities &&
                              item.responsibilities.map(responsibility => {
                                return <li>{responsibility}</li>;
                              })}
                          </ul>
                        </div>
                      )}

                      {item.keyHighlights.length > 0 && (
                        <div>
                          <h6>Key highlights</h6>
                          <ul className="circle">
                            {item.keyHighlights &&
                              item.keyHighlights.map(highLight => {
                                return <li>{highLight}</li>;
                              })}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="row text-left border-bottom-sm">
            <div className="three columns">
              <h3>
                <span>EDUCATION</span>
              </h3>
            </div>
            <div className="nine columns">
              {resumeData.education &&
                resumeData.education.map(item => {
                  return (
                    <div>
                      <h4>
                        {item.from} - {item.to} - {item.school}
                      </h4>
                      <h5 className="info">{item.qualification}</h5>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="row text-left border-bottom-sm">
            <div className="three columns">
              <h3>
                <span>SKILLS</span>
              </h3>
            </div>
            <div className="nine columns">
              <ul className="disc small-margin">
                {resumeData.skills &&
                  resumeData.skills.map(skill => {
                    return <li>{skill}</li>;
                  })}
              </ul>
            </div>
          </div>
          <div className="row text-left">
            <div className="three columns">
              <h3>
                <span>INTERESTS</span>
              </h3>
            </div>
            <div className="nine columns">
              <ul className="disc small-margin">
                {resumeData.interests &&
                  resumeData.interests.map(iterests => {
                    return <li>{iterests}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    let testimonialsData = this.props.testimonialsData;

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <h1>{testimonialsData.title}</h1>
          </div>
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {testimonialsData.feedback &&
                    testimonialsData.feedback.map(item => {
                      return (
                        <li>
                          <blockquote>
                            <p>{item.comments}</p>
                            <cite>
                              {item.sender} - {item.role}
                            </cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}

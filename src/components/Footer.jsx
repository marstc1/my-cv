import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let aboutData = this.props.aboutData;

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {aboutData.socialLinks &&
                aboutData.socialLinks.map(item => {
                  return (
                    <li>
                      <a href={item.url}>
                        <span className="sr-only">{item.name}</span>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" href="#home">
            <span className="sr-only">Back to Top</span>
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;

    return (
      <section id="portfolio">
        <div>
          <h2>{portfolioData.title}</h2>
        </div>
        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {portfolioData.works &&
            portfolioData.works.map(item => {
              if (item.underNDA) return null;
              return (
                <div className="columns portfolio-item-meta">
                  <img
                    src={this.props.portfolioData.imagePath + item.imageName}
                    alt={item.imageAlt}
                  />
                  <p>
                    <a href={item.url} target="new">
                      {item.name}
                    </a>
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

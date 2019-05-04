import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import headerData from "./data/headerData";
import aboutData from "./data/aboutData";
import resumeData from "./data/resumeData";
import portfolioData from "./data/portfolioData";
import testimonialsData from "./data/testimonialsData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerData={headerData} />
        <About aboutData={aboutData} />
        <Resume resumeData={resumeData} />
        <Portfolio portfolioData={portfolioData} />
        <Testimonials testimonialsData={testimonialsData} />
        <Contacts aboutData={aboutData} />
        <Footer aboutData={aboutData} />
      </div>
    );
  }
}

export default App;

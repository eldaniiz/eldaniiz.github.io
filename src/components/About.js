import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
        <p>I'm 18 Years Old <b>Computer Science Geek</b>. Not graduated from anywhere.
        I am also currently on a full time engineering job at{" "}
        <a href="https://dillbill.com/">DillBill</a> as a{" "}
        <b>Software Engineer</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>Deep Learning</b>, <b>Brain-Computer Interface</b>, <b>Computer Vision</b> and{" "}
        <b>DevOps</b>.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:eldanizbabayev@protonmail.com">
            eldanizbabayev@protonmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "PHP",
      "Yii2",
      "MySQL",
      "GCP",
      "Python",
      "Django",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "HTML & CSS",
      "JavaScript"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are my Tech Stack:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

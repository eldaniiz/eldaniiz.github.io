import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "YouTube Clone": {
        desc:
          "Experience with PHP's Yii2 Framework; Developed Like, Subscribe, Tag, and View Pages; Created Basic Search Engine for finding videos",
        techStack: "PHP(Yii2), MySQL, JQuery, HTML/CSS/JS",
        link: "https://github.com/eldaniiz/youtube-clone-yii2",
      },
      "Wall Recoloring": {
        desc:
          "Created Computer Vision Algorithm for Wall Recoloring; Developed API for interacting Flutter Mobile App; Deployed API to GCP App Engine;",
        techStack: "Python(Flask), OpenCV, Google Cloud Platform",
        link: "Freelance Project",
      },
      "Pass&Go": {
        desc:
          "Face Recognition With Identification Document.",
        techStack: "Python, Tensorflow, Flask, Keras, NumPy",
        link: "https://github.com/eldaniiz/face-recognition-service-flask",
      },
      "BERT Content Based Question Answering": {
        desc:
          "Content Based Question Answering Implemented With Google's Bert NLP model.",
        techStack: "Python, bert(google's library), NumPy, PyTorch, Flask(for API)",
        link: "https://github.com/eldaniiz/bert-content-based-qa",
        open: ""
      },
      "Learn jQuery": {
        desc:
          "Repository which includes jquery scripts from zero(like selectors) to advanced level. Such as animating sidebar, animate scroll and etc.",
        techStack: "HTML/CSS, JavaScript",
        link: "https://github.com/eldaniiz/learn-jQuery",
        open: ""
      },
      "Supervised Learning Algorithms Implemented With Python": {
        desc:
          " In this repository you can see some supervised learning models, which is wrote in scikit-learn library in Python.\n" +
            "\n" +
            "Algorithms:\n" +
            "\n" +
            "SVM,\n" +
            "\n" +
            "Decision Tree,\n" +
            "\n" +
            "K-Nearest Neighbors,\n" +
            "\n" +
            "Logistic Regression",
        techStack: "Python, scikit-learn, Pandas, NumPy",
        link: "https://github.com/eldaniiz/supervised-learning-algorithms",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

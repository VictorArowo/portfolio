import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import { Tabs, Tag } from "antd";
import { tabletPortrait, tabeletMax, smallLaptop } from "../styles/breakpoints";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  FaGlobeAfrica,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowCircleLeft
} from "react-icons/fa";

const { TabPane } = Tabs;

const Projects = ({ page, setPage }) => {
  const styles = useSpring({
    opacity: page === 1 ? 0.98 : 0,
    marginLeft: page === 1 ? 0 : 500,
    display: page === 1 ? "flex" : "none"
  });
  return (
    <Div style={styles}>
      <div className="top">
        <h1 className="header">FEATURED</h1>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="content">
        <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
          <TabPane tab="Applications" key="1">
            <div className="projects">
              <div className="project">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <h3>DevDesk Queue</h3>
                    <img src="projects/Devdesk.png" />
                  </FrontSide>
                  <BackSide>
                    <div>
                      <h3>DevDesk Queue</h3>
                      <p style={{ color: "#f8f8ff" }}>
                        A ticket logging and tracking app, built to be used in
                        educational institutions. Has an accompanying slackbot
                        for a better user experience.
                      </p>
                      {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      })}
                      <div
                        className="links"
                        style={{
                          color: "#f8f8ff",
                          fontSize: "38px",
                          width: "40%",
                          display: "flex",
                          justifyContent: "space-around",
                          margin: "auto",
                          marginTop: "10px"
                        }}
                      >
                        <a href="https://github.com/Developer-Desk-Queue-Lambda-Build/Frontend">
                          <FaGithub />
                        </a>
                        <a href="https://devdeskq.netlify.com/">
                          <FaGlobeAfrica />
                        </a>
                      </div>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
              <div className="project">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <h3>Intl. Rural School</h3>
                    <img src="projects/RuralSchool.png" />
                  </FrontSide>
                  <BackSide style={{ color: "#f43517" }}>
                    <h3>Intl. Rural School</h3>
                    <p style={{ color: "#f8f8ff" }}>
                      An infrastructure management app for small schools that
                      need assistance from foreign organizations.
                    </p>
                    {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                      return (
                        <Tag key={idx} closable={false}>
                          {elem}
                        </Tag>
                      );
                    })}
                    <div
                      className="links"
                      style={{
                        color: "#f8f8ff",
                        fontSize: "38px",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "auto",
                        marginTop: "10px"
                      }}
                    >
                      <a href="https://github.com/inter-rural-school/front-end">
                        <FaGithub />
                      </a>
                      <a href="https://internationalrsr.netlify.com/login">
                        <FaGlobeAfrica />
                      </a>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
              <div className="project">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <h3>markedit</h3>
                    <img src="projects/Markedit.png" />
                  </FrontSide>
                  <BackSide style={{ color: "#f43517" }}>
                    <h3>markedit</h3>
                    <p style={{ color: "#f8f8ff" }}>
                      A simple to use, cloud based markdown editor
                    </p>
                    {["React", "Node.JS", "GraphQL", "MongoDB"].map(
                      (elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      }
                    )}
                    <div
                      className="links"
                      style={{
                        color: "#f8f8ff",
                        fontSize: "38px",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "auto",
                        marginTop: "10px"
                      }}
                    >
                      <a href="https://github.com/VictorArowo/markedit">
                        <FaGithub />
                      </a>
                      <a href="https://markedit.now.sh/">
                        <FaGlobeAfrica />
                      </a>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
              <div className="project">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <h3>Lambda Door</h3>
                    <img src="projects/LambdaDoor.png" />
                  </FrontSide>
                  <BackSide style={{ color: "#f43517" }}>
                    <h3>Lambda Door</h3>
                    <p style={{ color: "#f8f8ff" }}>
                      An all-in-one job portal geared towards Lambda School
                      students looking for jobs. Lambda School students can post
                      reviews about jobs and interview processes.
                    </p>
                    {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                      return (
                        <Tag key={idx} closable={false}>
                          {elem}
                        </Tag>
                      );
                    })}
                    <div
                      className="links"
                      style={{
                        color: "#f8f8ff",
                        fontSize: "38px",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "auto",
                        marginTop: "10px"
                      }}
                    >
                      <a href="https://github.com/LABS-EU3/lambdaDoor_frontend">
                        <FaGithub />
                      </a>
                      <a href="https://lambdadoor.com">
                        <FaGlobeAfrica />
                      </a>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Open Source Libraries" key="2">
            <div className="projects">
              <div className="project">
                <Flippy
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide>
                    <h3>Consim</h3>
                    <img src="projects/JS.png" />
                  </FrontSide>
                  <BackSide style={{ color: "#f43517" }}>
                    <h3>Consim</h3>
                    <p style={{ color: "#f8f8ff" }}>
                      A utility for node.js and the browser which offers more
                      control over how asynchronous functions are invoked on
                      elements of an array.
                    </p>
                    {["Javascript"].map((elem, idx) => {
                      return (
                        <Tag key={idx} closable={false}>
                          {elem}
                        </Tag>
                      );
                    })}
                    <div
                      className="links"
                      style={{
                        color: "#f8f8ff",
                        fontSize: "38px",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "auto",
                        marginTop: "10px"
                      }}
                    >
                      <a href="https://github.com/VictorArowo/consim">
                        <FaGithub />
                      </a>
                      <a href="https://www.npmjs.com/package/consim">
                        <FaGlobeAfrica />
                      </a>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <div className="contact">
        <p>
          <a href="mailto:arowov@gmail.com" target="_top" className="email">
            arowov@gmail.com
          </a>
        </p>
        <FaArrowCircleLeft
          className="bounce left"
          onClick={() => setPage(0)}
          color="#f43517"
          fontSize="50px"
        />
        <div className="socials">
          <a
            href="https://twitter.com/ArowoV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/victor-arowo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VictorArowo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </Div>
  );
};

const Div = styled(a.div)`
  background-color: #25274d;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  position: absolute;
  top: 0;
  padding-top: 10px;
  @media ${tabeletMax} {
    height: auto;
    min-height: 100vh;
  }

  @media ${tabletPortrait} {
    width: 90vw;
    height: 90vh;
    background-color: #25274d;
    box-shadow: 5px 9px 15px 5px #111;
    opacity: 0.98;
    position: absolute;
    top: 5vh;
    left: 5vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 10vmax;
      height: 10vmax;
    }
  }

  .header {
    writing-mode: tb-rl;
    font-size: calc(0.75em + 1vmin);
    font-family: "Montserrat", sans-serif;
    color: #f43517;
  }

  .content {
    @media ${tabletPortrait} {
      width: 60%;
      position: fixed;
      top: 10vh;
    }
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @media ${tabeletMax} {
      height: 60%;
    }
    @media ${tabletPortrait} {
      height: 80%;
      overflow: auto;
    }
    @media ${smallLaptop} {
      height: 100%;
      overflow: hidden;
    }
  }
  .project {
    width: 45%;
    height: auto;
    margin-bottom: 20px;
    color: #f43517;
    text-align: center;
    p {
      font-size: 12px;
    }
    @media ${tabeletMax} {
      width: 100%;
    }
    img {
      width: 20vmax;
    }
    h2 {
      color: #f43517;
      margin-top: 0;
    }
  }

  h3 {
    color: #f43517;
  }
  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 95%;
    margin-top: auto;
    margin-bottom: 15px;
    p {
      margin: 0;
    }

    a {
      color: #f43517;
      font-size: calc(0.75em + 2vmin);
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }

    .socials {
      display: flex;
      flex-direction: column;
      * {
        margin-top: 0.5vmax;
      }
    }
  }
`;

export default Projects;

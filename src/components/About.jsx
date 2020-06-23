import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowCircleRight
} from "react-icons/fa";
import { useSpring, animated as a } from "react-spring";
import { tabletPortrait } from "../styles/breakpoints";

const About = ({ page, setPage }) => {
  const styles = useSpring({
    opacity: page === 2 ? 1 : 0,
    marginLeft: page === 2 ? 0 : -500,
    display: page === 2 ? "flex" : "none"
  });
  return (
    <Div style={styles}>
      <div className="top">
        <h1 className="header">ABOUT ME</h1>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="content">
        Hi there, I'm a Nigerian Fullstack Developer and I enjoy making things
        work. I primarily build for the web using Javascript.
        <br />
        <br />
        Let's get in touch :)
      </div>
      <div className="arrow">
        <FaArrowCircleRight
          className="bounce right"
          onClick={() => setPage(0)}
          color="#f43517"
          fontSize="50px"
        />
      </div>

      <div className="contact">
        <p>
          <a href="mailto:arowov@gmail.com" target="_top" className="email">
            arowov@gmail.com
          </a>
        </p>
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
    width: 80%;
    font-family: "Montserrat", sans-serif;
    color: #f8f8ff;
    font-size: calc(0.75em + 2vmin);
    text-align: center;
  }

  .arrow {
    margin-top: 20px;
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

export default About;

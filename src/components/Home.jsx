import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowCircleDown
} from "react-icons/fa";
import { tabletPortrait, mobilePortrait } from "../styles/breakpoints";

const Home = ({ page, setPage }) => {
  const styles = useSpring({
    marginTop: page === 0 ? 0 : -1500,
    zIndex: page === 0 ? 10 : 0
  });

  return (
    <Div style={styles}>
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="tagline">
        <h1 className="name">VICTOR AROWO</h1>
        <h3>Software Developer</h3>
      </div>

      <div className="links">
        <div className="horizontal">
          <FaArrowCircleLeft
            className="bounce left"
            onClick={() => setPage(2)}
            color="#f43517"
          />
          <FaArrowCircleRight
            className="bounce right"
            onClick={() => setPage(1)}
            color="#f43517"
          />
        </div>
        <FaArrowCircleDown
          className="bounce down"
          onClick={() => setPage(3)}
          color="#f43517"
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

  .logo {
    img {
      width: 200px;
      height: 200px;
      @media ${mobilePortrait} {
        width: 150px;
        height: 150px;
      }
    }
  }

  .tagline {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    h1 {
      font-size: calc(0.75em + 5vmin);
      color: #f43517;
    }
    h3 {
      font-size: calc(0.75em + 3vmin);
      color: #f8f8ff;
    }
  }

  .links {
    font-size: calc(0.75em + 5vmin);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;

    .horizontal {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      max-width: 500px;
      margin: auto;
    }
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 95%;
    margin-top: auto;
    padding-bottom: 15px;
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
export default Home;

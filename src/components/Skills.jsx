import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import { tabletPortrait, smallLaptop } from "../styles/breakpoints";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowCircleUp,
} from "react-icons/fa";

const Skills = ({ page, setPage }) => {
  const styles = useSpring({
    opacity: page === 3 ? 0.98 : 0,
    marginTop: page === 3 ? 0 : 500,
    display: page === 3 ? "flex" : "none",
  });

  return (
    <Div style={styles}>
      <div className="top">
        <h1 className="header">MY SKILLS</h1>
        <img src="logo.png" alt="logo" />
      </div>
      <Grid>
        <div className="skill">
          <img src="skills/react.png" alt="react" />
          <div>React</div>
        </div>
        <div className="skill">
          <img src="skills/redux.png" alt="redux" />
          <div>Redux</div>
        </div>
        <div className="skill">
          <img src="skills/node.png" alt="node" />
          <div>Node.js</div>
        </div>
        <div className="skill">
          <img src="skills/typescript.png" alt="ts" />
          <div>Typescipt</div>
        </div>
        <div className="skill">
          <img src="skills/vue.png" alt="vue" />
          <div>Vue</div>
        </div>
        <div className="skill">
          <img src="skills/pg.png" alt="pg" />
          <div>PostgreSQL</div>
        </div>
        <div className="skill">
          <img src="skills/gql.png" alt="gql" />
          <div>GraphQL</div>
        </div>
        <div className="skill">
          <img src="skills/python.png" alt="python" />
          <div>Python</div>
        </div>
        <div className="skill">
          <img src="skills/csharp.png" alt="csharp" />
          <div>C#</div>
        </div>
        <div className="skill">
          <img src="skills/django.png" alt="django" />
          <div>Django</div>
        </div>
      </Grid>
      <div className="arrow">
        <FaArrowCircleUp
          className="bounce"
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

const Grid = styled.div`
  display: grid;
  width: 80%;
  max-height: 64%;
  min-height: 64%;
  overflow: auto;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-column-gap: 0px;
  grid-row-gap: 30px;

  .skill {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 190px;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    font-size: 25px;
    color: white;
    div {
      margin-top: 15px;
    }
    img {
      width: 80px;
    }
  }
`;

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

  .bounce {
    z-index: 10;
    @media ${tabletPortrait} {
      margin-top: 5vmin;
    }
  }

  .chart {
    @media ${smallLaptop} {
      width: 29vw;
    }
  }

  .contact {
    position: absolute;
    bottom: 0;
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

export default Skills;

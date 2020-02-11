import React from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import { tabletPortrait, smallLaptop } from "../styles/breakpoints";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowCircleUp
} from "react-icons/fa";

import ReactApexChart from "react-apexcharts";

const Skills = ({ page, setPage }) => {
  const styles = useSpring({
    opacity: page === 3 ? 0.98 : 0,
    marginTop: page === 3 ? 0 : 500,
    display: page === 3 ? "flex" : "none"
  });

  const series = [
    {
      name: "Skill",
      data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    }
  ];

  const options = {
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    chart: {
      type: "bar",
      height: "500px",
      width: "500px"
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "JavaScript",
        "React",
        "Redux",
        "Node.JS",
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "MongoDB",
        "GraphQL"
      ],
      labels: {
        show: false
      },
      lines: {
        show: false
      },
      max: 100,
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517",
            "#f43517"
          ]
        }
      }
    },
    tooltip: {
      enabledOnSeries: false,
      y: {
        show: false
      }
    }
  };

  return (
    <Div style={styles}>
      <div className="top">
        <h1 className="header">MY SKILLS</h1>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="chart">
        <ReactApexChart options={options} series={series} type="bar" />
      </div>
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

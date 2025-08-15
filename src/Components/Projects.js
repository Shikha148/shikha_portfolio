import React from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@material-ui/icons/Code";

const Projects = () => {
  const items = [
    {
      cardTitle: "Conference Management System",
      cardDetailedText: [
        "Made a web application which is used for managing events and workshops",
        "This application allows users to check out and register for any particular event listed.",
        "Technology used: MERN stack and REST API.",
      ],
      technologies: ["MongoDB", "ExpressJS", "ReactJS", "Node.Js"],
      links: [
        {
          url: "https://github.com/Shikha148/User_conference_management_system",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Holidazzle",
      cardDetailedText: [
        "Web application that automates processes of travel and tourism.",
        "Handles creation of tours by admin and booking by users.",
        "Developed in JAVA with JSP, Servlets, and MySQL.",
      ],
      technologies: ["Java", "JSP", "Servlets", "MySQL"],
      links: [],
    },
  ];

  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  icon={<CodeIcon />}
                  iconStyle={{ background: "#0563bb", color: "#fff" }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((tech, idx) => (
                      <Chip key={idx} label={tech} />
                    ))}
                  </div>
                  <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                    {data.cardTitle}
                  </h3>
                  <ul style={{ color: "#74808a" }}>
                    {data.cardDetailedText.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {data.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="contained"
                        color="default"
                        target="_blank"
                        href={link.url}
                        style={{ marginRight: "5px", marginTop: "5px" }}
                      >
                        {link.text}
                      </Button>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

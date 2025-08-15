


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "Aug 2023 - Present",
      cardTitle: "UBS, Pune",
      cardSubtitle: "Software Engineer - Asset Management (UBS)",
      cardDetailedText: [
        "Leading backend development for the Corporate Actions Dashboard",
        "It enables Portfolio Managers to track and take timely actions on events like dividends, payouts, and stock splits.",
        "Developed scheduled Azure Function and Built Web API services hosted on an Azure Web App ",
        "Automated manual file sendingSMTP and dynamic email templates",
        " Created an intuitive dashboard using ReactJS to monitor email delivery statuses and perform CRUD operations on user portfolios.",
        "Designed and developed backend services using Java and Spring Boot enabling efficient data handling and reducing boilerplate through the use of JPA and RESTful architecture.",
        "Technologies: JAVA, Springboot, C#, RESTful APIs, ReactJS, Azure, Git, Gitlab, SQL, Agile",
      ].map((text) => <li>{text}</li>),
    },
    {
      date: "Jul 2022 - Nov 2022",
      cardTitle: "Centre for Development of Advanced Computing (CDAC), Delhi",
      cardSubtitle: "Project Developer",
      cardDetailedText: [
        "Developed a web application for trainees and attendees to register for training sessions/conferences using MERN stack.",
        "Designed and implemented the frontend using ReactJS to provide a responsive interface and used MongoDB as database.",
        "Built backend APIs with Node.js and Express to handle user registration and training session/conference process.",
        "Technologies: MongoDB, Express, ReactJS, Node.js, Github, SRS, SDS",
      ].map((text) => <li>{text}</li>),
    },
    {
      date: "May 2022 - Jun 2022",
      cardTitle: "UBS, Pune",
      cardSubtitle: "Summer Intern - Wealth Management (UBS)",
      cardDetailedText: [
        "Worked on a CRM application, handling bug fixes and development tasks.",
        "Implemented secure JWT token-based authentication to enhance user identity verification and access control across microservices.",
        "Worked on remediation of spring4shell RCE vulnerability by applying security patches, updating dependencies, and conducting thorough testing to ensure system resilience.",
        "Technologies: JAVA, Springboot, Microservices, RESTful API",
      ].map((text) => <li>{text}</li>),
    },
  ];

  return (
    <section id="experience" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(33, 150, 243)",
                  }}
                  iconStyle={{ background: "#0563bb", color: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "14",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "#7e8890",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <ul
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}


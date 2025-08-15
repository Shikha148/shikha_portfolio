import img from "./images/IMG_20241120_152846.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="90%"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Engineer</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              I am a <strong>Software Engineer</strong> specialized in <strong>backend development</strong> with hands on experience in <strong>frontend technologies like ReactJS</strong>. I have built <strong>scalable, cloud integrated applications</strong> leveraging <strong>Microsoft Azure</strong>. I am experienced in <strong>Agile environments</strong>, automating workflows and delivering efficient full stack solutions.
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
              I am also <strong>certified in Microsoft Azure Fundamentals and AI Fundamentals</strong> and passionate about creating robust applications that solve real world problems.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+91 9871106617</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Pune, Maharashtra</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>B.Tech in Computer Science (2019-2023)</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:shikhapandey148@gmail.com">
                        shikhapandey148@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

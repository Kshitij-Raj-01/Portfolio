import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Banking System"
              description="Online Banking System in Python where user create, login, edit, withdraw, credit and delete their account. It uses pickle, os and pathlib library. For messaging on account creation, we used twillio api key."
              ghLink="https://github.com/Kshitij-Raj-01/Online-Banking-System/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

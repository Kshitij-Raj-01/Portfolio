import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/WeatherApp.png";
import chatify from "../../Assets/Projects/chatify.png";
import ToDo from "../../Assets/Projects/ToDo.png";
import Blog from "../../Assets/Projects/Blog.png";
import VidyaVaani from "../../Assets/Projects/VidyaVaani.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="The Weather App project in ReactJS is a simple yet effective application that fetches and displays current weather data for a specified location. It leverages external weather APIs to provide real-time information and demonstrates key concepts of React development such as component-based architecture, state management, and API integration."
              ghLink="https://github.com/Kshitij-Raj-01/WeatherApp-ReactJs/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDo App"
              description="The ToDo List project is designed to help users manage their tasks efficiently. Users can add new tasks with descriptions, mark tasks as completed, view a list of completed tasks, and delete tasks. The project demonstrates the use of ReactJS for building interactive user interfaces."
              ghLink="https://github.com/Kshitij-Raj-01/TodoList-ReactJs/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog Loom"
              description="Blog Loom is a modern, user-friendly blogging platform designed to empower creators with seamless content creation, customization, and sharing. Built on the MERN stack with cloud integration, it offers robust security, scalability, and an intuitive interface for both beginners and professionals. Blog Loom simplifies blogging, making it a dynamic space for self-expression and meaningful engagement in the digital era."
              ghLink="https://github.com/Kshitij-Raj-01/blogging-website/"
              demoLink="https://blog-loom.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VidyaVaani}
              isBlog={true}
              title="Vidya Vaani"
              description="Vidya Vaani is an inclusive educational platform for deaf and mute individuals, teaching math and science through Indian Sign Language (ISL) in Hindi, English, and Gujarati. It offers tailored interfaces for students, parents, and teachers, with features like voice-to-sign and sign-to-voice converters, interactive quizzes, and progress tracking. Built with React Native, Django, and AI/ML, it bridges communication gaps and fosters accessible learning."
              ghLink="https://blog-loom.netlify.app/blogs/Vidya-Vaani-Empowering-Deaf-and-Mute-Communities-through-Sign-Language-in-Their-Native-Language4gTfmD_riAJW5jpo7GHiR"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

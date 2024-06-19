import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import python from "../../Assets/techstack/python.png";
import Js from "../../Assets/techstack/JavaScript.png";
import react from "../../Assets/techstack/React.png";
import node from "../../Assets/techstack/Node Js.png";
import git from "../../Assets/techstack/Git.png";
import mongo from "../../Assets/techstack/MongoDb.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiJavascript1 /></div>
        <div><img src={Js} style={{scale:'1.2'}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiNodejs /></div>
        <div><img src={node} style={{scale:'1.2'}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiReact /></div>
        <div><img src={react} style={{scale:'1.2'}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiMongodb /></div>
        <div><img src={mongo} style={{scale:'1.2'}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiGit /></div>
        <div><img src={git} style={{scale:'1.2'}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><DiPython /></div>
        <div><img src={python} style={{scale:'1.2'}} alt="" /></div>
      </Col>
    </Row>
  );
}

export default Techstack;

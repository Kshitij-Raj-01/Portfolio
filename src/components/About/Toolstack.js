import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter
} from "react-icons/si";
import jupyter from "../../Assets/techstack/jupyter.png"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div><SiVisualstudiocode /></div>
        <div><SiVisualstudiocode style={{color:'skyblue'}}/></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div><SiJupyter /></div>
        <div><img src={jupyter} alt="" style={{scale: '1.5'}}/></div>
      </Col>
    </Row>
  );
}

export default Toolstack;

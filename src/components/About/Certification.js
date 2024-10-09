import React from "react";
import { Col, Row } from "react-bootstrap";
import Mern from "../../Assets/Certificates/MERN by Pregrad.png"
import blockchain from "../../Assets/Certificates/BlockChain Course by Relaince(Skill India).png"
import ethical from "../../Assets/Certificates/Ethical Hacking Cybrary.png"
import google_cyber from "../../Assets/Certificates/Google CyberSecurity Certificate.png"
import python from "../../Assets/Certificates/Great Learning Python Course Completion Certificate.png"
import NCL from "../../Assets/Certificates/National Coding League 2024 Round 1 Competition.png"
import Scalar_python from "../../Assets/Certificates/Scalar University Python Certificate.png"

function Certifications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="certificates">
        <div><img src={google_cyber} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={Mern} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={ethical} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={blockchain} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={NCL} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={Scalar_python} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
      <Col xs={4} md={2} className="certificates">
        <div><img src={python} style={{width:"20rem", height:"15rem"}} alt="" /></div>
      </Col>
    </Row>
  );
}

export default Certifications;

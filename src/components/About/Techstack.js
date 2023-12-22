import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPhotoshop,
  DiIllustrator,
  DiMagento,
} from "react-icons/di";
import {
  SiMui,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMagento/>
      </Col>
      
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import SoftStudio from "../../Assets/Projects/softstudios.png";
import Matrix from "../../Assets/Projects/matrix.png";
import UltraMinds from "../../Assets/Projects/ultraminds.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Matrix}
              title="MATRIXE ZONE"
              description="Matrixe Zone is a Creative Web Agency in Noida, India and Headquarter Leipzig, Germany that accompanies you in all your Web Projects! Creation of Websites, production of editorial contents, Implementation of Digital Strategies:"
              demoLink="http://www.matrixe-zone.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SoftStudio}
              title="Soft Studios"
              description="The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives."
              demoLink="https://softudios.com/html/index.html"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={UltraMinds}
              title="Ultra Mind labs"
              description="Your One-Stop Web Design Solution. Anything and Everything – From Informative website to complicated Ecommerce Stores To Portals To Web Applications, You Get It All. When You Work with Us, You Get A Diverse Team Of Experts Who Can Work On Any Web Project."
              demoLink="https://ultramindlabs.co.in/web-design.html"
            />
          </Col>
          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

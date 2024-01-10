import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import projectData from "./projectData";
import designData from "./DesignData";
import socialMediaData from "./SocialData"
import "./project.css";
import Designs from "./Designs";
import { FidgetSpinner } from "react-loader-spinner";
import SocialMedia from "./SocialMedia";

function Projects() {
  const [displayedDesigns, setDisplayedDesigns] = useState([]);
  const itemsPerScroll = 9;
  const listInnerRef = useRef();
  const [loading, setLoading] = useState(false);
  const [initialLoadCompleted, setInitialLoadCompleted] = useState(false); // New state for initial load tracking

  useEffect(() => {
    loadMoreDesigns(false); // Initial load without loader
  }, []);

  const loadMoreDesigns = (showLoader = true) => {
    if (displayedDesigns.length >= designData.length) return; // No more items to load
    if (showLoader) setLoading(true);

    setTimeout(
      () => {
        const nextItems = designData.slice(
          displayedDesigns.length,
          displayedDesigns.length + itemsPerScroll
        );
        setDisplayedDesigns(displayedDesigns.concat(nextItems));
        setLoading(false);
        setInitialLoadCompleted(true); // Mark initial load as completed
      },
      showLoader ? 3000 : 0
    ); 
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      loadMoreDesigns(initialLoadCompleted); // Only show loader after initial load
    }
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works</strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>

        <Tabs
          defaultActiveKey="projects"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="projects" title="Projects">
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {projectData.map((project, index) => (
                <Col key={index} md={6} lg={4} className="project-card">
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    description={project.description}
                    demoLink={project.demoLink}
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="designs" title="Website Designs">
            <ul className="d-flex designList">
              {displayedDesigns.map((design, index) => (
                <li key={index} ref={listInnerRef} onScroll={handleScroll}>
                  <Designs imgPaths={design.imgPaths} />
                </li>
              ))}
              {loading && (
                <FidgetSpinner
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="fidget-spinner-loading"
                  wrapperStyle={{}}
                  wrapperClass="fidget-spinner-wrapper"
                />
              )}
            </ul>
          </Tab>
          {/* <Tab eventKey="socialmedia" title="Social Media Creatives">
            <ul className="d-flex designList">
              {socialMediaData.map((design, index) => (
                <li key={index} ref={listInnerRef} onScroll={handleScroll}>
                  <SocialMedia imgPaths={design.imgPaths} />
                </li>
              ))}
            </ul>
          </Tab> */}
        </Tabs>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

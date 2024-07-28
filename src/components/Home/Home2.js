import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hariomKumarimg from "../../Assets/hariom_kumar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section py-0" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign:"left" }} data-aos="fade-right" className="text-left">
              <span className="primary-header"> WORK </span> EXPERIENCE
            </h1>
            <p className="home-about-body pt-0" data-aos="fade-up">
              <br />
              As a{" "}
              <b className="primary-header">
                Professional Front-end Designer
              </b>{" "}
              with over 10+ years of experience, I specialize in creating dynamic,
              responsive websites and web applications.
              <br />
              <br />
              My expertise lies in{" "}
              <b className="primary-header">
                HTML5, CSS3, JavaScript, Bootstrap, and React JS
              </b>
              . I have a strong background in web design, with skills in CSS3,
              Adobe Illustrator, and Graphic Design, ensuring aesthetically
              pleasing and functional designs.
              <br />
              <br />
              At <b className="primary-header">Source Soft Solutions Pvt. Ltd.,</b> I honed my skills in
              developing rich internet applications and working with platforms
              like Shopify, WordPress, Magento, Angular, and React JS. My
              proficiency in converting PSD to HTML and ensuring cross-browser
              compatibility has been instrumental in delivering high-quality web
              solutions.
              <br />
              <br />I am passionate about{" "}
              <b className="primary-header">
                leveraging new technologies and design principles
              </b>{" "}
              to create user-friendly web experiences. Always eager to embrace
              new challenges, I am continuously expanding my portfolio with
              innovative <i className="primary-header">projects</i>.
              <br />
              <br />
              With a knack for{" "}
              <b className="primary-header">
                responsive designs and mobile-first applications
              </b>
              , I am committed to learning and growing in the field of web
              development.
            </p>
          </Col>
          <Col md={4} className="myAvtar my-auto">
            <Tilt>
              <img
                data-aos="fade-left"
                src={hariomKumarimg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social pt-lg-5 mt-lg-5 pb-4">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/HariomKumarUI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:kumarhariom498@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hariomkumarui/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

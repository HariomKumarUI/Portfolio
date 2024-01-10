import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { pdfjs } from "react-pdf";
import pdf from "../../Assets/Hariom_Kumar_Resume.pdf";
import HariomKumar from "../../Assets/resumeimage.png";
import Particle from "./Particle"
import "./style.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={HariomKumar} alt="Pankaj_chavan" className="img-fluid w-75"></img>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
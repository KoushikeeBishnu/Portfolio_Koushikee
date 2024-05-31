import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import handwritten from "../../Assets/hand.jpeg";
import Portfoilo from "../../Assets/portfolio.jpeg";
import woof from "../../Assets/woof.jpeg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              imgPath={woof}
              isBlog={false}
              title="Woof"
              description="WOOF - Way To Get A PAWsome Life: An web application for daily petcare at an ease of pet owners. The app can deliver all the need of your pet and supervise activities also. It has also features like SOS, Doctor At Doorstep, Remainder system etc."
              demoLink="https://woof-doctor.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwritten}
              isBlog={false}
              title="Handwritten Prescription Recognition"
              description="Handwritten Prescription Recognition utilizes CNNs, BiLSTMs, and CTC layers for accurate text extraction. Image preprocessing enhances clarity, enabling effective recognition and interpretation of handwritten prescriptions for improved digitization and healthcare management."
              ghLink="https://github.com/KoushikeeBishnu/Prescriptions-Read"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfoilo}
              isBlog={false}
              title="Portfolio"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/KoushikeeBishnu/Portfolio_Koushikee"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Koushikee Bishnu </span>
            from <span className="purple">Birbhum, West Bengal, India.</span>
            <br />
            I am currently employed as a <span className="purple">Product/Web Dvelopement Intern </span>in KreativIT.in .
            <br />
            I am currently Persuing <span className="purple">Bachelor of Engineering</span>   in <span className="purple">Information Technology</span> at University Institute of Technology,Burdwan.
           
            <br />
            <br />
            Apart from coding, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sing
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Guitar, Harmonium
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing poems, stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

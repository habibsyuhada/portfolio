import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Picthemovie from "../../Assets/Projects/themovie.png";
import Picrestourantapps from "../../Assets/Projects/restourant-apps.png";

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
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Picrestourantapps}
              isBlog={false}
              title="Restaurant Finder"
              description="Restaurant Finder is an innovative web application built using JavaScript, allowing users to easily search for nearby restaurants and view ratings, descriptions, addresses, and comments from other users. With advanced and interactive search features, this application provides a better culinary experience, helping users discover their favorite dining spots effortlessly."
              ghLink="https://github.com/habibsyuhada/dicoding-restaurant-apps"
              demoLink="https://habibsyuhada.github.io/dicoding-restaurant-apps"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Picthemovie}
              isBlog={false}
              title="The Movie"
              description='"The Movie" is an intriguing web application built using JavaScript, seamlessly integrated with the TMDB (The Movie Database) API through https://api.themoviedb.org. This application allows users to discover trending movies, explore detailed information about specific films, and conduct searches for desired movies. With its intuitive interface and seamless TMDB API integration, users can effortlessly delve into the world of cinema, find popular films, and access comprehensive details about their favorite movies. "The Movie" offers a delightful and informative experience for all movie enthusiasts.'
              ghLink="https://github.com/habibsyuhada/themovie"
              demoLink="https://habibsyuhada.github.io/themovie/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Picthemovie}
              isBlog={false}
              title="Portfolio"
              description='Portfolio is a web application built using JavaScript with the React.js framework. The purpose of this application is to showcase a collection of projects I have created, along with information about myself. With an appealing design and a responsive interface, this application provides an opportunity for me to exhibit my work and skills to the world. Visitors can easily navigate and explore my personal portfolio to view completed projects, gain insights into my capabilities and experiences, and find contact information for collaboration or feedback. Portfolio offers a perfect platform for me to highlight my expertise and creativity to potential recruiters, clients, or colleagues.'
              ghLink="https://github.com/habibsyuhada/portfolio"
              demoLink="https://habibsyuhada.github.io/portfolio/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

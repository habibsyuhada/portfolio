import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
							As a versatile software engineer with expertise in <i><b className="purple">PHP</b></i>, <i><b className="purple">JavaScript</b></i>, <i><b className="purple">Node.js</b></i>, and <i><b className="purple">React</b></i>, I am passionate about leveraging my programming skills to develop robust and scalable web applications. With a strong foundation in backend and frontend development, I thrive in collaborative environments where I can contribute to the entire software development life cycle.
							<br/>
							<br/>
							In addition to my core software engineering skills, I have a strong background as a mobile programmer, specializing in developing cutting-edge mobile applications for both Android and iOS platforms. I am well-versed in mobile development frameworks, such as <i><b className="purple">React Native</b></i> and <i><b className="purple">Flutter</b></i>, which allow me to efficiently build cross-platform mobile applications with native-like performance and user experience.
							<br/>
							<br/>
							DevOps plays a crucial role in my workflow, and I am well-versed in <i><b className="purple">Git</b></i> for version control, managing code repositories, and collaborating effectively with teammates. Additionally, I have experience working with automation servers like <i><b className="purple">Jenkins</b></i> and implementing continuous integration and delivery pipelines. I also possess proficiency in <i><b className="purple">server monitoring tools</b></i>, <i><b className="purple">enabling proactive monitoring</b></i>, <i><b className="purple">performance optimization</b></i>, and <i><b className="purple">ensuring seamless application uptime</b></i>.
							<br/>
							<br/>
							I am a firm believer in <i><b className="purple">continuous learning</b></i> and <i><b className="purple">actively stay updated</b></i> with the latest industry trends. I enjoy exploring new technologies and frameworks to enhance my development skills and deliver innovative solutions.
							<br/>
							<br/>
							Beyond my technical expertise, I am a <i><b className="purple">proactive communicator</b></i> and <i><b className="purple">effective problem solver</b></i>. I believe in the power of collaboration and thrive on building strong relationships with stakeholders, working together to achieve project success.
							<br/>
							<br/>
							I am currently seeking new opportunities to contribute my programming skills, agile mindset, and DevOps expertise to dynamic teams and impactful projects. If you are looking for a <i><b className="purple">dedicated software engineer</b></i> who can deliver efficient, scalable, and high-performing applications, <i><b className="purple">let's connect</b></i> and explore potential collaborations.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/habibsyuhada"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/habib-syuhada/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/habib.syuh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

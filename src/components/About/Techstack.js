import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
	SiPhp,
	SiLaravel,
	SiLumen,
	SiDart,
	SiFlutter,
	SiFlask,
	SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nodejs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Dart">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flask">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Php">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Laravel">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Lumen">
        <SiLumen />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postgresql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mysql">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;

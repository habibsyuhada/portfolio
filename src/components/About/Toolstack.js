import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGrafana,
  SiPrometheus,
  SiNginx,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiPostman,
  SiSourcetree,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Sourcetree">
        <SiSourcetree />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Grafana">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Prometheus">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nginx">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Elasticsearch">
        <SiElasticsearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Logstash">
        <SiLogstash />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kibana">
        <SiKibana />
      </Col>
    </Row>
  );
}

export default Toolstack;

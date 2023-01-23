import React from "react";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";

export default function Farma() {
  return (
    <div>
      <Container className="mt-3">
        <Card>
          <CardBody>
            <Row>
              <Col md={6}>
                <Label>CSV</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>Excel</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>Fist Name</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>Last Name</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>LGA</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>State</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>Phone No</Label>
                <Input type="number" />
              </Col>
              <Col md={6}>
                <Label>Address (Farma)</Label>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Label>Farm (Address)</Label>
                <Input type="text" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

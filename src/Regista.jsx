import React, { useState } from "react";
import { Row, Col, Card, ButtonGroup, Button } from "reactstrap";
import "./Register.css";
import Registration from "./Registration";
import Signin from "./Signin";

export default function Register() {
  const [page, setPage] = useState(false);
  return (
    <div className="sign-in-body">
      <Row className="mt-5">
        <Col md={4}></Col>
        <Col md={4}>
          <Card className="card p-5 input shadow">
            <header>
              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                      <ButtonGroup>
                        <Button
                          style={{
                            backgroundColor: page ? "#f4f4f4 " : "#002147",
                            color: page ? "#002147" : "#f4f4f4",
                            outline: "none",
                          }}
                          onClick={() => setPage(false)}
                        >
                          Register
                        </Button>
                        <Button
                          style={{
                            backgroundColor: page ? "#002147" : "#f4f4f4",
                            color: !page ? "#002147" : "#f4f4f4",
                            outline: "none",
                          }}
                          onClick={() => setPage(true)}
                        >
                          Signin
                        </Button>
                      </ButtonGroup>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </Col>
                <Col md={4}></Col>
              </Row>
            </header>

            <form>{!page ? <Registration /> : <Signin />}</form>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

import React from "react";
import "./Register.css";
import { BiChevronRight } from "react-icons/bi";
import { Row, Col, Button } from "reactstrap";
import { useState } from "react";

export default function Signin() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div className="signin-main">
        <div className="sign-in-body">
          <form>
            <>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <div class="form-row">
                    <input
                      class="mb-4 input_field p-3"
                      type="text"
                      placeholder="username"
                    />
                  </div>
                  <div class="form-row">
                    <div className="d-flex">
                      <input
                        class="mb-4 input_field p-3"
                        type={display ? "password" : "text"}
                        placeholder="password "
                      />
                      <i
                        className={
                          display ? "fa fa-eye" : "fa-solid fa-eye-low-vision"
                        }
                        style={{ marginLeft: -43, marginTop: 30 }}
                        onClick={() => setDisplay(!display)}
                      ></i>
                    </div>
                    <button className="btn btn-rounded w-25">
                      Go
                      <BiChevronRight size={45} />
                    </button>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
            </>
          </form>
        </div>
      </div>
    </div>
  );
}

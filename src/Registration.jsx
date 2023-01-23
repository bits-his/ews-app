import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

import { Row, Col, Button } from "reactstrap";
import "./Register.css";

export default function Registration() {
  const [value, setValue] = useState(null);
  const [display, setDisplay] = useState(false);
  return (
    <div>
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
                  <input
                    class="mb-4 input_field p-3"
                    type="tel"
                    placeholder="phone"
                  />
                </div>
                <div class="form-row">
                  <input
                    class="mb-4 input_field p-3"
                    type="email"
                    placeholder="email"
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
                </div>
                {/* <Button className="btn btn-rounded w-25 input">
                  <BiChevronRight size={45} />
                </Button> */}
                <div class="form-row">
                  <button
                    type="submit "
                    class="form-control form-control-lg mb-4 p-1 button-submit input"
                  >
                    Register <BiChevronRight size={40} />
                  </button>
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </>
        </form>
      </div>
    </div>
  );
}

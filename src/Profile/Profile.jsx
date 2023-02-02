import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, CardBody, CardText, CardTitle } from "reactstrap";
import org_logo from "../Images/profile.jpg";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail, MdPassword } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
export default function Profile() {
  const { user } = useSelector((p) => p.auth);

  return (
    <div>
      {JSON.stringify({ user })}

      <Row>
        <Col md={1}></Col>
        <Col md={4} className="col-lg-3 m-4">
          <Card
            className="mb-4"
            style={{ backgroundColor: "#001f43", color: "#fff" }}
          >
            <div class="card-body text-center">
              <img src={org_logo} className="org_logo" />
              <p className="profile_name">{user.name}</p>
              <p style={{ display: "inline-block" }}>{user.email}</p>

              <p>{user.phone1}</p>
              <p>{user.phone2}</p>
              <p>{user.address}</p>
              <p>{user.website}</p>
            </div>
          </Card>
        </Col>

        <Col md={4} className="card mt-4">
          <div className="card-body ">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <AiTwotonePhone size={30} />
                <p className="mb-0">1234567</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <MdEmail size={30} />
                <p className="mb-0">abd@gmail.com</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <FaGlobe size={30} />
                <p className="mb-0">knowtify.com</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <MdPassword size={30} />
                <p className="mb-0">1234567dsfdj</p>
              </li>
              
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Table } from "reactstrap";
import store from "../redux/store";
import { _get, _post } from "../utils/Helper";

export default function Farmers() {
  const goto = useNavigate();
  const [data, setData] = useState([]);
  const [farmers, setFarmers] = useState([]);
  useEffect(() => {
    _get(
      "farmers?query_type=VIEW-ALL",
      (response) => {
        setFarmers(response.results);
        alert(JSON.stringify(response));
      },
      (error) => {
        console.error(error);
      }
    );
  }, [0]);
  //
  const handleGet = () => {};
  //   _post(
  //     "farmers",
  //     (res) => {
  //       setData(res.results);
  //     },
  //     (err) => {
  //       console.log(err);
  //       alert(err);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   handleGet();
  // }, []);
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        {JSON.stringify({ farmers })}
        <Row>
          <Col md={6}>
            <h3 className="card_title">Farmers</h3>
          </Col>
          <Col md={6}>
            <button
              className="primary_button"
              onClick={() => goto("/onboard-farmers")}
              style={{ float: "right" }}
            >
              Onboard Farmers
            </button>
          </Col>
        </Row>
        <Table responsive size="sm mt-5">
          <thead>
            <tr>
              <th>SN</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
              <th>Table failed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

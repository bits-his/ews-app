import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function Farma() {
  const _form = {
    csv: "",
    excel: "",
    first_name: "",
    last_name: "",
    lga: "",
    state: "",
    phone: "",
    address_farmer: "",
    farm_address: "",
  };
  const [form, setForm] = useState(_form);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));
  return (
    <div>
      <Container className="mt-3">
        <Card>
          <CardBody>
            <Row>
              <Col md={6}>
                <Label>CSV</Label>
                <Input
                  type="text"
                  name="csv"
                  value={form.csv}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Excel</Label>
                <Input
                  type="text"
                  name="excel"
                  value={form.excel}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Fist Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>LGA</Label>
                <Input
                  type="text"
                  name="lga"
                  value={form.lga}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>State</Label>
                <Input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Phone No</Label>
                <Input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Address (Farma)</Label>
                <Input
                  type="text"
                  name="address_farmer"
                  value={form.address_farmer}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label>Farm (Address)</Label>
                <Input
                  type="text"
                  name="farm_address"
                  value={form.farm_address}
                  onChange={handleChange}
                />
              </Col>
            </Row>
           <center><Button className="mt-2">Submit</Button></center> 
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

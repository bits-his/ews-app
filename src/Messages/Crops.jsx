import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, Row } from 'reactstrap'
export default function Crops({ options, onClick, onChange, multiSelections }) {
  return (
    <div>
      <Row className="" style={{ display: 'flex', alignItems: 'center' }}>
        <Col md={12}>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            // onChange={setMultiSelections}
            options={options}
          
            onChange={onChange}
            placeholder="Select Crops."
            selected={multiSelections}
            name="farming type"
            className="input_field"
          />
        </Col>
        {/* <Col md={2}>
          <button className="primary_button" onClick={onClick}>Add</button>
        </Col> */}
      </Row>
    </div>
  )
}

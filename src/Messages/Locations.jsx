import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, Row } from 'reactstrap'
export default function Locations({
  options,
  onClick,
  // onInputChange,
  onChange,
  multiSelections,
}) {
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
            onClick={onClick}
            onChange={onChange}
            placeholder="Select Locations."
            selected={multiSelections}
            name="farming type"
            className="input_field"
            // onInputChange={}
          />
        </Col>
        {/* <Col md={2}>
          <button className="primary_button">Add</button>
        </Col> */}
      </Row>
    </div>
  )
}

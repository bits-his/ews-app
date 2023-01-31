import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, Row } from 'reactstrap'
export default function Locations({
  options,
  onClick,
  onChange,
  multiSelections,
}) {
  return (
    <div>
      <Row className="" style={{ display: 'flex', alignItems: 'center' }}>
        <Col md={10}>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            // onChange={setMultiSelections}
            options={['Kano', 'Abuja']}
            onClick={onClick}
            onChange={onChange}
            placeholder="Select Locations."
            selected={multiSelections}
            name="farming type"
            className="input_field p-2"
          />
        </Col>
        <Col md={2}>
          <button className="primary_button">Add</button>
        </Col>
      </Row>
    </div>
  )
}

import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, Row } from 'reactstrap'
export default function Languages({
 
  onClick,
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
            options={['Hausa', 'Yoruba', 'Igbo']}
            onClick={onClick}
            onChange={onChange}
            placeholder="Select one language."
            selected={multiSelections}
            name="language type"
            className="input_field"
          />
        </Col>
        {/* <Col md={2}>
          <button className="primary_button">Add</button>
        </Col> */}
      </Row>
    </div>
  )
}

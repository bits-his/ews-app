import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Button,
  Table,
} from 'reactstrap'
// import store from '../redux/store'
import { _get, _post } from '../utils/Helper'
import { IoMdMore } from 'react-icons/io'
import { useSelector } from 'react-redux'
import EditModal from './EditModal'

export default function Farmers() {
  const goto = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [farmers, setFarmers] = useState([])
  const { user } = useSelector((state) => state.auth)
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState({})
  const toggle = () => setModal(!modal)

  useEffect(() => {
    setLoading(true)
    _get(
      `farmers?query_type=VIEW-ALL&org_id=${user.org_id}`,
      (response) => {
        setLoading(false)
        let newArr = []
        response.results.forEach((i) => newArr.push({ ...i, dropDown: false }))
        setFarmers(newArr)
        // alert(JSON.stringify(response));
        console.log({ response })
      },
      (error) => {
        setLoading(false)
        console.error(error)
      },
    )
  }, [0])

  const handleToggle = (i) => {
    let arr = []
    farmers.forEach((item, idx) => {
      if (idx === i) {
        if (item.dropDown) {
          arr.push({ ...item, dropDown: false })
        } else {
          arr.push({ ...item, dropDown: true })
        }
      } else {
        arr.push(item)
      }
    })
    setFarmers(arr)
  }
  //
  const handleGet = () => {}
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
        {/* {JSON.stringify({ farmers })} */}
        <Row>
          <Col md={6}>
            <h3 className="card_title">Farmers</h3>
          </Col>
          <Col md={6}>
            <button
              className="primary_button"
              onClick={() => goto('/onboard-farmers')}
              style={{ float: 'right' }}
            >
              Onboard Farmers
            </button>
          </Col>
        </Row>
        <Table responsive size="sm mt-5" striped>
          <thead>
            <tr>
              <th>SN</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>LGA</th>
              <th>State</th>
              <th>Farming Type</th>
              <th>Crops</th>
              <th>Scales</th>
              <th>Action</th>
              {/* <th>
                <span style={{ float: 'right' }}>Actions</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <span>loading...</span>
            ) : (
              farmers.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.fname} {item.lname}
                  </td>
                  <td>{item.phone}</td>
                  <td>{item.lga}</td>
                  <td>{item.state}</td>
                  <td>{item.f_type}</td>
                  <td>{item.crops}</td>
                  <td>{item.scales}</td>
                  <td>
                    <div className="d-flex">
                      <Dropdown
                        isOpen={item.dropDown}
                        toggle={() => handleToggle(index)}
                        direction="down"
                      >
                        <DropdownToggle>
                          <IoMdMore style={{ fontSize: 22 }} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => {
                              toggle()
                              setEdit(item)
                            }}
                          >
                            Edit
                          </DropdownItem>
                          <Modal isOpen={modal} toggle={toggle} size="md">
                            <ModalBody>
                              <EditModal edit={edit} toggle={toggle} />
                            </ModalBody>
                          </Modal>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </td>
                  {/* <td>
                  <div style={{ float: 'right', cursor: 'pointer' }}>
                    <FaEllipsisV />
                  </div>
                </td> */}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}

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
import { _delete, _get, _post } from '../utils/Helper'
import { IoMdMore } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'
import EditModal from './EditModal'

export default function Farmers() {
  const goto = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [farmers, setFarmers] = useState([])
  const { user } = useSelector((state) => state.auth)
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)

  const [edit, setEdit] = useState({})
  const toggle = () => setModal(!modal)
  const toggle1 = () => setModal1(!modal1)

  const getData = () => {
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
  }

  useEffect(() => {
    getData()
  }, [user.org_id])

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
  const handleDelete = () => {
    _delete(
      'farmers/delete-farmers',
      { farmer_id: edit.farmer_id },
      (res) => {
        if (res.success) {
          getData()
          toggle1()
          // alert('sucessful')
        }
        // alert('sucess')
        console.log(res)
      },
      (err) => {
        console.log(err)
        // alert(err)
      },
    )
    console.log(form)
  }
  return (
    <div>
      <Card className="dashboard_card m-3 shadow-sm p-4">
        {/* {JSON.stringify({ farmers })}  */}
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
                  <td>{item.scale}</td>
                  <td>
                    <div className="d-flex">
                      <Dropdown
                        isOpen={item.dropDown}
                        toggle={() => handleToggle(index)}
                        direction="down"
                      >
                        <DropdownToggle
                          className="drop_down_menu"
                          style={{
                            backgroundColor: 'transparent',
                            outline: 'none',
                            border: 'none',
                          }}
                        >
                          <IoMdMore className="drop_down_menu_icon" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => {
                              toggle()
                              setEdit(item)
                            }}
                          >
                            <BiEdit
                              style={{
                                fontSize: 25,
                                marginRight: 3,
                                marginBottom: 2,
                              }}
                            />{' '}
                            Edit
                          </DropdownItem>
                          <Modal isOpen={modal} toggle={toggle} size="md">
                            <ModalBody>
                              <EditModal
                                edit={edit}
                                toggle={toggle}
                                getData={getData}
                              />
                            </ModalBody>
                          </Modal>
                          <DropdownItem
                            className="delete_drop_down"
                            onClick={() => {
                              toggle1()
                              setEdit(item)
                            }}
                          >
                            <MdDeleteOutline
                              style={{
                                fontSize: 25,
                                marginRight: 3,
                                marginBottom: 2,
                              }}
                            />
                            Delete
                          </DropdownItem>
                          <Modal
                            isOpen={modal1}
                            toggle={toggle1}
                            size="sm"
                            style={{ padding: 30 }}
                          >
                            <ModalBody>
                              <center style={{ fontSize: 20 }}>
                                {' '}
                                Are you sure you want to delete?
                              </center>
                              {/* {JSON.stringify(edit)} */}
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <button
                                  className="primary_button mt-4"
                                  onClick={toggle1}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="primary_button mt-4"
                                  onClick={() => handleDelete(item)}
                                >
                                  Delete
                                </button>
                              </div>
                            </ModalBody>
                          </Modal>
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

            {farmers.length === 0 ? (
              <span>No farmers registered to this association</span>
            ) : null}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}

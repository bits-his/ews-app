import React from "react";
import { Table } from "reactstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function FarmerTable({ data = [], handleDelete = (f) => f }) {
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Product</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr>
              <th scope="row">{id + 1}</th>
              <td>
                {item.fname} {item.lname}
              </td>
              <td>{item.products}</td>
              <td>
                <RiDeleteBin6Line onClick={() => handleDelete(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
       <button className="primary_button mt-4 button">
            Submit
          </button>
        </div>
    </>
  );
}

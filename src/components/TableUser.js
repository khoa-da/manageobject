import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllUsers } from "./Services/UserService";
import ReactPaginate from "react-paginate";

import TablePagination from "@mui/material/TablePagination";
import ModalAddNew from "./ModalAddNew";

const TableUsers = () => {
  const [listusers, setListUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalusers, setTotalUsers] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };

  useEffect(() => {
    getUsers(1);
  }, []);
  const getUsers = async (page) => {
    let res = await fetchAllUsers(page);
    if (res && res.data) {
      setListUsers(res.data);
      setTotalPage(res.total_pages);
      setTotalUsers(res.total);
    }
  };
  console.log(listusers);

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  const handleUpdateTable = (user) => {
    setListUsers([...listusers, user]);
  };

  console.log(listusers);

  return (
    <div>
      <div className="my-3 add-new">
        <span>
          <b>List User</b>
        </span>
        <button
          className="btn btn-primary"
          onClick={() => setIsShowModalAddNew(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listusers &&
            listusers.length > 0 &&
            listusers.map((item, index) => {
              return (
                <tr key={`key + ${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
    </div>
  );
};

export default TableUsers;

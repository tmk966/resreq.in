import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/userServices";
import ReactPaginate from "react-paginate";
const TableUser = (props) => {
  const [listUsers, setlistUsers] = useState([]);
  const [totalUsers, settotalUsers] = useState(0);
  const [totalPages, settotalPages] = useState(0);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);

    if (res && res.data) {
      settotalPages(res.total_pages);
      settotalUsers(res.total);
      setlistUsers(res.data);
    }
  };

  useEffect(() => {
    getUsers(2);
  }, []);
  // react paginate
  const handlePageClick = (event) => {
    getUsers(+event.selected + 1);
  };

  return (
    <>
      <Table striped="columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
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
        Displayed
        Page
        Range={5}
        pageCount={totalPages}
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
    </>
  );
};
export default TableUser;

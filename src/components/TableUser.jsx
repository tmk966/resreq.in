import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/userServices";

const TableUser = (props) => {
  const [listUsers, setlistUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetchAllUser();

    if (res && res.data) {
      setlistUsers(res.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log("respone:>>>>>>>>>>>>", listUsers);

  return (
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
  );
};
export default TableUser;

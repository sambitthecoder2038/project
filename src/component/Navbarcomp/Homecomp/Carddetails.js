import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Carddetails() {
  const [usersDetails, setUsersDetails] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("https://jsonplaceholder.org/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        setUsersDetails(users);
        // console.log(users);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  console.log(usersDetails, "123456");
  return (
    <div className="display-data">
      {usersDetails &&
        usersDetails.map((item) => (
          <div key={item.id}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.login.username}</td>
                </tr>
                {/* <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        ))}
    </div>
  );
}

export default Carddetails;

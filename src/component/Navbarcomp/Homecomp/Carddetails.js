import React, { useEffect, useState } from "react";

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
      hello
      {usersDetails &&
        usersDetails.map((item) => (
          <div key={item.id}>
            {item.firstname},{item.login.username}
          </div>
        ))}
    </div>
  );
}

export default Carddetails;

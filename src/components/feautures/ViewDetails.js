import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewDetails() {
    const [users,setUsers]=useState([])
  const params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <div>
      <p>Name: {users.name}</p>
      <p>Email: {users.email} </p>
      <p>Phone:  {users.phone}</p>
    </div>
  );
}

export default ViewDetails;

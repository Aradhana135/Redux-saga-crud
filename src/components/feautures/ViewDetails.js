import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Card, Alert } from "antd";
import "../../../src/components/styles.css";
import { useHistory } from "react-router-dom";
import { actionCreators as usersActions } from "../../redux/index";
function ViewDetails() {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const params = useParams();
  const history = useHistory();
  const deleteUser = () => {
    dispatch(usersActions.deleteUser(users));
    setIsDelete(true);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  }, [params.id]);
  return (
    <Card>
      <p className="para-cls">Name : {users.name}</p>
      <p className="para-cls">Email : {users.email} </p>
      <p className="para-cls">Phone : {users.phone}</p>

      <Button
        type="primary"
        onClick={() => history.push(`/edituser/${params.id}`)}
      >
        Edituser
      </Button>
      <Button type="primary" onClick={deleteUser}>
        Deleteuser
      </Button>
      <Button type="primary" onClick={() => history.push("/")}>
        Return
      </Button>
      {isDelete && <Alert message="Data deleted Successfully" showIcon />}
    </Card>
  );
}

export default ViewDetails;

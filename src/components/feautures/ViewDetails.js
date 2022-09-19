import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Card,  message } from "antd";
import "../../../src/components/styles.css";
import { useHistory } from "react-router-dom";
import { actionCreators as usersActions } from "../../redux/users/actions";
function ViewDetails() {
  // const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  // const [hover, setHover] = useState(false);
  const params = useParams();
  const history = useHistory();

  const deleteUser = () => {
    dispatch(usersActions.deleteUser(users));
    // setIsDelete(true);
    setTimeout(() => {
      dispatch(usersActions.list());
       history.push("/");
    }, 1000);
    message.success('Data deleted successfully');
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
        Edit user
      </Button>

      <Button
        type="primary"
        style={{ background: "red", borderColor: "red" }}
        onClick={ deleteUser
        }
      >
        Delete user
      </Button>
      <Button
        type="primary"
        style={{ background: "green", borderColor: "green" }}
        onClick={() => history.push("/")}
      >
        Return
      </Button>
      {/* {isDelete && <Alert message="Data deleted Successfully" showIcon />} */}
    </Card>
  );
}

export default ViewDetails;

import { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "../../components/styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import AddEditForm from "./AddEditForm";
import { Card ,message} from "antd";
import {
  actionCreators as usersActions,
} from "../../redux/users/actions";
const EditDetails = () => {
  const [users, setUsers] = useState({});
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  });
  console.log("users", users);
  const history = useHistory();

  const onFinish = (values) => {
    dispatch(usersActions.edit({ ...values, id: params.id }));
    setTimeout(() => {
      dispatch(usersActions.list());
      history.push("/");
     }, 1000);
    // setTimeout(() => {
    //   history.push("/");
    //  }, 2000);
     dispatch(usersActions.list());
      console.log("params", params.id)

message.success('Data edited successfully');
  };
  const handleCancel = () => {
    history.push("/");
  };

  return (
    <>
      <Card>
        <AddEditForm
          onFinish={onFinish}
          cancel={handleCancel}
          users={users}
          formFor="edit"
        /> 
      </Card>
    </>
  );
};

export default EditDetails;

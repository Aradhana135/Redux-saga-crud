import { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "../../components/styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddEditForm from "./AddEditForm";
import { Card } from "antd";
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../../redux/index";
const EditDetails = () => {
  const [users, setUsers] = useState({});
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  }, []);
  console.log("users", users);
  const history = useHistory();

  const onFinish = (values) => {
    dispatch(usersActions.edit({ ...values, id: params.id }));
    history.push("/");
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

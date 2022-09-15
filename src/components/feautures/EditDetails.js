import { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "../../components/styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddEditForm from "./AddEditForm";

const EditDetails = (props) => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  }, []);
  console.log("users", users);
  const history = useHistory();

  console.log("hh");
  console.log(props.data);
  const onFinish = (values) => {
    history.push("/users");
  };
  const handleCancel = () => {
    history.push("/users");
  };

  return (
    <>
      <AddEditForm
        onFinish={onFinish}
        cancel={handleCancel}
        users={users}
        formFor="edit"
      />
    </>
  );
};

export default EditDetails;

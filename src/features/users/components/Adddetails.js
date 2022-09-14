import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../.././components/styles.css";
import { actionCreators as usersActions } from "../../../features/users";
import AddEditForm from "./AddEditForm";
import { useHistory } from "react-router-dom";
const AddDetails = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const onFinish = (values) => {
    //passing added value
    dispatch(usersActions.add({ ...values, id: Math.random() }));
    history.push("/users");
    // props.handleAdd(values);
    //on successfull addition navigate to home page
    // navigate("/users");
  };
  //on cancel navigate to home page
  const cancel = () => {
    history.push('/users')
  };

  return (
    <div>
      <AddEditForm onFinish={onFinish} cancel={cancel} formFor="add" />
    </div>
  );
};
export default AddDetails;

import "antd/dist/antd.min.css";
import { useDispatch } from "react-redux";
import "../styles.css";
import { actionCreators as usersActions } from "../../redux/index";
import AddEditForm from "./AddEditForm";
import { useHistory } from "react-router-dom";
const AddDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const onFinish = (values) => {
    //passing added value
    dispatch(usersActions.add({ ...values, id: Math.random() }));
    history.push("/");
    console.log('phone',values.phone)
  };
  //on cancel navigate to home page
  const cancel = () => {
    history.push("/");
  };

  return (
    <div>
      <AddEditForm onFinish={onFinish} cancel={cancel} formFor="add" />
    </div>
  );
};
export default AddDetails;

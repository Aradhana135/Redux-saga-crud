import "antd/dist/antd.min.css";
import { useDispatch, useSelector } from "react-redux";
import "../styles.css";
import { actionCreators as usersActions } from "../../redux/index";
import AddEditForm from "./AddEditForm";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Card } from "antd";
import { Alert } from "antd";
const AddDetails = () => {
  const [isadd, setIsadd] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  //   const navigate = useNavigate();

  const onFinish = (values) => {
    //passing added value
    dispatch(usersActions.add({ ...values, id: users.length++ }));
    setTimeout(() => {
      history.push("/");
    }, 1000);

    setIsadd(true);
  };
  //on cancel navigate to home page
  const cancel = () => {
    history.push("/");
  };

  return (
    <div>
      <Card>
        <AddEditForm onFinish={onFinish} cancel={cancel} formFor="add" />
      </Card>
      {isadd && <Alert message="Data Added Successfully" showIcon />}
    </div>
  );
};
export default AddDetails;

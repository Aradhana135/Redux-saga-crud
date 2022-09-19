import "antd/dist/antd.min.css";
import { useDispatch, useSelector } from "react-redux";
import "../styles.css";
import { actionCreators as usersActions } from "../../redux/users/actions";
import AddEditForm from "./AddEditForm";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card ,message} from "antd";

const AddDetails = () => {
  const [isadd, setIsadd] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  

  const onFinish = (values) => {
    //passing added value
    dispatch(usersActions.add({ ...values, id: users.length++ }));
    setTimeout(() => {

      history.push("/");
    }, 1000);

    setIsadd(true);
    message.success('Data added successfully');
  };
  useEffect(() => {
    if (isadd || !users) {

      dispatch(usersActions.list());
    }
  }, [dispatch, isadd, users]);
  //on cancel navigate to home page
  const cancel = () => {
    history.push("/");
  };

  return (
    <div>
      <Card>
        <AddEditForm onFinish={onFinish} cancel={cancel} formFor="add" />
      </Card>
      {/* {isadd && <Alert message="Data Added Successfully" showIcon />} */}
    </div>
  );
};
export default AddDetails;

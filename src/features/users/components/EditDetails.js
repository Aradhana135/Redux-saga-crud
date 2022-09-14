import { useState } from "react";
import "antd/dist/antd.min.css";
import '../../.././components/styles.css'
import { useNavigate } from "react-router-dom";
import MyForm from "./AddEditForm";
import { useHistory } from "react-router-dom";
const EditDetails = (props) => {
    const history=useHistory()
//   const navigate = useNavigate();
  //fetched user data
  const [dataSource, setDataSource] = useState(props.data || {});

  const onFinish = (values) => {
    //passing edited value
    props.handleEditData(values);
    //datasource will be new edited data
    setDataSource(values);
    history.push('/users')
    //on successfull edition navigate to home page
    // navigate("/users");
  };
  const handleCancel = () => {
    //on cancel navigate to home page
    // navigate("/users");
    history.push('/users')
  };

  return (
    <>
      <MyForm
        onFinish={onFinish}
        cancel={handleCancel}
        dataSource={dataSource}
        formFor="edit"
      />
    </>
  );
};

export default EditDetails;
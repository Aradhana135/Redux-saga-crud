import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Modal } from "antd";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import "../../components/styles.css";
import { message } from "antd";

import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../../redux/users/actions";

const Users = () => {
  const [isDelete, setIsDelete] = useState(false);
  const history = useHistory();
  const { users } = useSelector((state) => usersSelector(state));
  console.log("users", users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isDelete || !users) {
      dispatch(usersActions.list());
    }
  }, [dispatch, isDelete, users]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sortDirections: ["descend", "ascend"],
      key: "name",
      width: "30%",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      sortDirections: ["descend", "ascend"],
      key: "email",
      width: "30%",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      width: "30%",
    },
    {
      title: "Actions",
      dataIndex: "actions",

      render: (text, record) => {
        return (
          <>
            <EyeOutlined
              onClick={() => history.push(`/viewuser/${record.id}`)}
              className={"eyeOutline"}
            />

            <EditOutlined
              className="editOutlined-css"
              onClick={(e) => {
                history.push(`/edituser/${record.id}`);
              }}
            />

            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
                
              }}
              className="deleteOutlined-css"
            />
          </>
        );
      },
    },
  ];
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(usersActions.deleteUser(record));
        setIsDelete(true);
        setTimeout(() => {
          setIsDelete(false);
        }, 1000);
        message.success('Data deleted successfully');
      },
    });
  };

  return (
    <>
      <Button
        type="primary"
        className="add-Button-css"
        onClick={() => history.push("/add")}
      >
        Add user
      </Button>
      <div 
      className="main-div-css"
      >
        <h1 className="heading-cls">User Details </h1>
        <div className="table-div-css">
        <Table 
          columns={columns}
          dataSource={users.dataList}
          loading={users.isLoading}
          rowKey={"id"}
          pagination={{
            defaultPageSize: 3,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
        </div>
       
      </div>
     
    </>
  );
};

export default Users;

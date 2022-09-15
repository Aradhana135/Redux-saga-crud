import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Modal } from "antd";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import "../../components/styles.css";

import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../../redux/index";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const { users } = useSelector((state) => usersSelector(state));
  console.log("users", users);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const showModal = (record) => {
    setIsModalOpen(true);
    setUser(record);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sortDirections: ["descend", "ascend"],
      key: "name",

      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      sortDirections: ["descend", "ascend"],
      key: "email",

      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <>
            <EyeOutlined
              onClick={() => history.push(`/view/${record.id}`)}
              className={"eyeOutline"}
            />

            <EditOutlined
              className="editOutlined-css"
              onClick={(e) => {
                // history.push("/edit/:id");
                history.push(`/edit/${record.id}`);
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
      },
    });
  };

  return (
    <>
      <Button
        type="primary"
        calssName="add-Button-css"
        onClick={() => history.push("/add")}
      >
        Add
      </Button>
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
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Name: {user.name}</p>
        <p>Email: {user.email} </p>
        <p>Phone: {user.phone}</p>
      </Modal>
      ;
    </>
  );
};

export default Users;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table,Modal } from "antd";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";

// import getColumnSettings from "../features/users/components/columnsSettings";
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../features/users";

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const { users } = useSelector((state) => usersSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.list());
  }, [dispatch]);
  console.log("qq", users);
  const showModal = (record) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //columns
  const columns=[
    {
        title: 'Name',
        dataIndex: 'name',
        sortDirections: ['descend', 'ascend'],key: 'name',
        width: '20%',
        sorter: (a, b) => a.name.localeCompare(b.name),
  
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sortDirections: ['descend', 'ascend'],key: 'name',
        width: '20%',
        sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: (a, b) => a.phone.localeCompare(b.phone)

    },
    {
        title:'Actions',
        dataIndex:'actions',
        render:(record)=>{
            return(
                <>
            
            <EyeOutlined
              onClick={showModal}
                // showModal(record)}
              className={"eyeOutline"}
            />
            
            <EditOutlined
              className="editOutlined-css"
              onClick={(e) => {
                // e.preventDefault();
                // props.handleData(record);
                // navigate("/edit");
                history.push('/edit')
              }}
            />
            
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              className="deleteOutlined-css"
            />
          </>
            )
        }
    }
    
];
  const onDeleteStudent = (record) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this student record?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
        //   props.handleDelete(record);
        },
      });
    };

    // const showModal = (record) => {
    //   setVisible(true);
    // //   setViewData(record);
    // };

    // const handleCancel = () => {
    //   setVisible(false);
    // };
  //view
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  return (
    <>
      <Button type="primary" onClick={() => history.push("/add")}>
        Add
      </Button>
      <Table
        columns={columns}
        dataSource={users.dataList}
        loading={users.isLoading}
        rowKey={"id"}
        pagination={{ defaultPageSize: 3, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
      />
    </>
  );
};

export default Users;

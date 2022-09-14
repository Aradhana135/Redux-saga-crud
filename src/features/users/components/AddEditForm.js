import React from "react";
import { Button, Input, Form, InputNumber } from "antd";
import '../../.././components/styles.css'
function AddEditForm(props) {
  return (
    <div >
    
      
      <Form className="add-edit-form-css"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={props.onFinish}
        autoComplete="off"
        initialValues={{
          name: props.formFor === "add" ? "" : props.dataSource.name,
          email: props.formFor === "add" ? "" : props.dataSource.email,
          phone: props.formFor === "add" ? "" : props.dataSource.phone,
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input allowClear className="input-css" placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          type="email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input Input allowClear className="input-css" placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your number!",
            },
          ]}
        >
          <Input  Input allowClear className="input-css" placeholder="Phone Number"  />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 20,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={props.cancel} className="Button-css">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
      
  );
}

export default AddEditForm;
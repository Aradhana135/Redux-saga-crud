import React, { useState, useEffect } from "react";
import { Button, Input, Form, InputNumber } from "antd";
import "../styles.css";
function AddEditForm(props) {
  return (
    <div>
      <Form
        className="add-edit-form-css"
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
          name: props.formFor === "add" ? "" : props.users.name,
          email: props.formFor === "add" ? "" : props.users.email,
          phone: props.formFor === "add" ? "" : props.users.phone,
        }}
      >
        <Form.Item
          className="form-item-cls"
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
          className="form-item-cls"
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
          className="form-item-cls"
          label="Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your number!",
            },
          ]}
        >
          <Input
            // type="number"
            Input
            allowClear
            className="input-css"
            placeholder="Phone Number"
          />
        </Form.Item>
<div className="form-submit-btn">
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 30,
          }}
        >
          <Button type="primary"  htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={props.cancel} >
            Cancel
          </Button>
        </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default AddEditForm;

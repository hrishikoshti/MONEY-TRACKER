import { Button, Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";

function Register() {
  const onFinish = async (values) => {
    try {
      await axios.post('api/users/register', values);
      message.success("Registration Successfull");
    } catch (error) {
      message.error("Something went wrong");
    }

  };
  return (
    <div className="register">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div>
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>MONEY-TRACKER / REGISTRATION</h1>
            <hr />
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered? Click here to login</Link>
              <button className="primary" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;

import { Button, Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import "../resources/authentication.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem("MONEY-TRACKER-user", JSON.stringify(response));
      message.success("Login Successfull");
      navigate("/");
    } catch (error) {
      message.error("Login Failed");
    }
  };
  return (
    <div className="Login">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>MONEY-TRACKER / REGISTRATION</h1>
            <hr />

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="Password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/Register">Not Registered? Click here to Register</Link>
              <button className="primary" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>

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
      </div>
    </div>
  );
}

export default Login;

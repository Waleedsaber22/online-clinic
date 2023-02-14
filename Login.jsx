import React from "react";
import { Checkbox, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import HeaderLine from "./HeaderLine";
import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Cookies from "universal-cookie";
const getMessage = (key, type, content, duration) => ({
  key,
  type,
  content,
  duration,
});

const signing = (
  values,
  messageApi,
  setValidState,
  navigate,
  fetchUserData
) => {
  messageApi.open(getMessage(1, "loading", "verfying..."));
  axios
    .post(
      `http://localhost:5000/login`,
      {
        data: values,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then(({ data }) => {
      const cookies = new Cookies();
      console.log(data);
      const userid = data?.data?.user_id;
      messageApi.open(getMessage(1, "success", "login successfully", 2));
      setTimeout(() => {
        navigate(`/`);
        fetchUserData(true, cookies.get("accessToken"));
      }, 2000);
    })
    .catch((err) => {
      const { isExist, isVerified } = err?.response?.data?.data || {};
      if (isExist == 0) {
        // bad request, name not exist
        messageApi.open(getMessage(1, "error", "invalid username", 2));
        setValidState((state) => ({ ...state, invalidUser: 1 }));
        // setValidState("error");
      } else if (isVerified == 0) {
        messageApi.open(getMessage(1, "error", "incorrect password", 2));
        setValidState((state) => ({ ...state, invalidPass: 1 }));
      } else {
        messageApi.open(
          getMessage(1, "error", "there's some issues, try again later", 2)
        );
        setValidState({ invalidUser: 0, invalidPass: 0 });
      }
    });
};
const Login = ({ isTokenExpired, fetchUserData }) => {
  console.log(isTokenExpired);
  const [messageApi, contextHolder] = message.useMessage();
  const [validState, setValidState] = useState({
    invalidUser: 0,
    invalidPass: 0,
  });
  const navigate = useNavigate();
  const { Item } = Form;
  const isMobile = useMediaQuery({
    query: "(max-width:778px)",
  });
  const [formValues, setFormValues] = useState(null);
  return (
    <div
      className="form--in--wrapper p-10 h-full grow
      flex justify-center flex-col justify-center items-center"
      style={{
        background: "#203a59",
      }}
    >
      {contextHolder}
      <HeaderLine
        value="Login"
        center
        invisible
        style={{ fontSize: "60px", color: "white", marginBottom: "65px" }}
        lineStyle={{ marginBottom: "65px" }}
      />
      {isTokenExpired && (
        <Title level={5} className=" !text-red-400 !text-xs">
          Your Time Has Expired, you can sign-in again
        </Title>
      )}
      <Form
        style={{
          background: "#203a59",
        }}
        name="entry"
        colon={false}
        size="large"
        className={isMobile ? `w-3/4` : `w-1/2`}
        initialValues={{ remember: false }}
        autoComplete="on"
        onFinish={(val) =>
          signing(val, messageApi, setValidState, navigate, fetchUserData)
        }
        // onFinish={(values)=>console.log("sccuss",values)}
        // onFinishFailed={(errvalues)=>console.log("fail",errvalues)}
        onValuesChange={(c, values) => {
          setFormValues(values);
          setValidState({ invalidUser: 0, invalidPass: 0 });
          console.log(values);
        }}
      >
        <Item
          name="username"
          validateStatus={validState.invalidUser ? "error" : ""}
          help={
            validState.invalidUser ? `be sure you write correct user` : null
          }
          // hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              pattern: "^([A-Z]|[a-z])+.{0,22}$",
              message: "must begin with letters and max 22 character",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="username" />
        </Item>
        <Item
          name="password"
          validateStatus={validState.invalidPass ? "error" : ""}
          help={
            validState.invalidPass
              ? `incorrect password, you can ask for help`
              : null
          }
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              message: `Minimum eight and maximum 12 characters, at least 
                one uppercase letter, one lowercase letter  `,
              pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Item>
        <Item name="remember" valuePropName="checked">
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Item>
        <Item>
          <Button type="primary" className="w-full" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Login;

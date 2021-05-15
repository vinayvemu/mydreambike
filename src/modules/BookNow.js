import React, { useState } from "react";
import Drawer from "../components/Drawer";
import DucatiM1 from "../components/Icons/DucatiM1";
import DucatiM2 from "../components/Icons/DucatiM2";
import DucatiM3 from "../components/Icons/DucatiM3";
import { Button, Form, Input } from "antd";
import SuccessNotification from "../utils/SuccessNotification";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e4e7ea;
  padding: 10px 16px;
  justify-content: space-between;
  background: #fff;
`;

const BookNow = ({ showDrawer, setShowDrawer, currentBike }) => {
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      SuccessNotification("Congratulations, We will get in touch Shortly ...!");
      setShowDrawer(false);
      setLoading(false);
    }, 1500);
  };

  const getCurrentBike = () => {
    switch (currentBike) {
      case "M1":
        return <DucatiM1 height="300" width="-webkit-fill-available" />;
      case "M2":
        return <DucatiM2 height="300" width="-webkit-fill-available" />;
      case "M3":
        return <DucatiM3 height="300" width="-webkit-fill-available" />;

      default:
        return null;
    }
  };
  const getContent = () => {
    return (
      <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
        <div>{getCurrentBike()}</div>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please enter user name",
              type: "string",
            },
          ]}
        >
          <Input placeholder="Please enter user name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Id"
          rules={[
            {
              required: true,
              message: "Please enter Email address",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Please enter user email address" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please enter Phone Number",
            },
          ]}
        >
          <Input placeholder="Please enter user contact number" />
        </Form.Item>
        <ButtonWrapper>
          <Button
            onClick={() => setShowDrawer(false)}
            style={{ marginRight: 8 }}
          >
            Cancel
          </Button>

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </ButtonWrapper>
      </Form>
    );
  };

  return (
    <div>
      <Drawer
        visible={showDrawer}
        loading={loading}
        spin={true}
        title="Book Now...!!!"
        placement="right"
        width={"30%"}
        closable={true}
        onClose={() => setShowDrawer(false)}
        getContainer={false}
        style={{ position: "absolute" }}
        content={getContent()}
      />
    </div>
  );
};
export default BookNow;

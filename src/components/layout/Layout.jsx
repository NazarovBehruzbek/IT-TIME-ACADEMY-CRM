import React from "react";
import { Layout as AntLayout, Space, Input, Switch } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import user from "../../assets/image.jpg";
const { Header } = AntLayout;

export default function Layout() {
  return (
    <div style={{ borderBottom: "1px solid #EEEEEE" }}>
      <AntLayout style={{ padding: "0 20px", background:"#ffffff" }}>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontSize: "18px" }}>IT Time Academy</h1>
          <Space>
            <Space.Compact>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Global Search"
                style={{ width: "500px" }}
              />
            </Space.Compact>
          </Space>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4>Open for Desktop</h4>
            <Switch
              size="small"
              defaultChecked
              style={{ marginLeft: "30px" }}
            />
            <div style={{ marginLeft: "30px", fontSize: "20px" }}>
              <BellOutlined />
            </div>
            <div>
              <img
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "30px",
                }}
                src={user}
                alt="User avatar"
              />
            </div>
          </div>
        </Header>
      </AntLayout>
    </div>
  );
}

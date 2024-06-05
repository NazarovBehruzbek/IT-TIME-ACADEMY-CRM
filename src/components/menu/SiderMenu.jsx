import React from "react";
import { Layout as AntLayout, Menu } from "antd";
import {
  AppstoreOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
  TableOutlined,
  LineChartOutlined,
  EditOutlined,
  CreditCardFilled,
} from "@ant-design/icons";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const { Sider, Content } = AntLayout;

export default function SiderMenu() {
  const location = useLocation();
  const menuItems = [
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: <NavLink to="/">Dashboard</NavLink>,
    },
    {
      key: "2",
      icon: <SnippetsOutlined />,
      label: <NavLink to="/courses">Kurslar</NavLink>,
    },
    {
      key: "3",
      icon: <UsergroupAddOutlined />,
      label: <NavLink to="/groups">Guruhlar</NavLink>,
    },
    {
      key: "4",
      icon: <TableOutlined />,
      label: <NavLink to="/tables">Dars jadvali</NavLink>,
    },
    {
      key: "5",
      icon: <EditOutlined />,
      label: <NavLink to="/students">Talabalar</NavLink>,
    },
    {
      key: "6",
      icon: <LineChartOutlined />,
      label: <NavLink to="/attendance">Davomat</NavLink>,
    },
    {
      key: "7",
      icon: <CreditCardFilled />,
      label: <NavLink to="/payments">To'lovlar</NavLink>,
    },
  ];
  const currentMenuKey = menuItems.find(
    (item) => location.pathname === item.label.props.to
  )?.key;
  return (
    <AntLayout style={{ minHeight: "calc(100vh - 65px)" }}>
      <Sider trigger={null} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[currentMenuKey]}
          items={menuItems}
          style={{ marginTop: "25px", background: "#fff" }}
        />
      </Sider>
      <AntLayout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}

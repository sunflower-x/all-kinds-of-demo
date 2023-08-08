import React, { useState } from "react";
import { useNavigate,Outlet } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// 侧边栏数组
const items = [
  getItem("首页", "home", <PieChartOutlined />),
  getItem("关于", "about", <DesktopOutlined />),
  getItem("表格", "table", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("表单", "form", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("财务", "9", <FileOutlined />),
];

function MyLayout() {
//   const outlet = useRoutes(routes);
  const [collapsed, setCollapsed] = useState(false);
  const navigate =useNavigate();
  const handleMenuClick = (params) => {
    // 编程式导航
    navigate(params.key)
    // console.log(params.key, 1111111);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {/* {outlet} */}
              <Outlet/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MyLayout;

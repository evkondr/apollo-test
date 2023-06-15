import React from 'react';
import { Layout, Space, Menu } from 'antd';
import {
  NavLink,
  Outlet
} from "react-router-dom";
const {Content, Sider} = Layout;
const items = [
  {
    label: <NavLink to="todos">Задачи</NavLink>,
    key: "1"
  }
]
const Root = () => {
  return (
    <>
      <Sider breakpoint="lg" collapsedWidth="0" style={{position: "fixed", hight: "100vh", left: 0, top: 0, bottom: 0}}>
    <Menu
      className="Navigation"
      defaultSelectedKeys={['1']}
      mode="vertical"
      items={items}
    />
    </Sider>
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
    </>
  )
}

export default Root

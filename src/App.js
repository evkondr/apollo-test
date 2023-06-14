import React from "react";
import TodoContainer from "./components/TodoContainer";
import AddForm from "./components/AddForm";
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const mainContent = {
  height: "100vh",
}
function App() {
  return <Layout style={ mainContent }>
    <Sider breakpoint="lg" collapsedWidth="0" style={{position: "fixed", hight: "100vh", left: 0, top: 0, bottom: 0}}>
      Sider
    </Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
    </Layout>
  </Layout>
}

export default App;

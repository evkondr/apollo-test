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
    <header>
      <AddForm />
    </header>
    <section className='app'>
      <TodoContainer />
    </section>
  </Layout>
}

export default App;

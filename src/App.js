import React from "react";
import TodoContainer from "./components/TodoContainer";
import Root from "./routes/Root";
import AddForm from "./components/AddForm";
import { Layout } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/todos",
        element: <TodoContainer />,
      },
    ],
  },
])

const mainContent = {
  height: "100vh",
}
function App() {
  return <Layout style={ mainContent }>
    <RouterProvider router={router}/>
  </Layout>
}

export default App;

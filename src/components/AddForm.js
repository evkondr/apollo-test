import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_TODO, ALL_TODOS } from '../apollo/todos';
import { Button, Checkbox, Form, Input } from 'antd';

const AddForm = () => {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  const [addTodo, {data, loading, error}] = useMutation(ADD_TODO, {
    refetchQueries: [
      ALL_TODOS,
    ],
  });


  const onFinish = ({title}) => {
    addTodo({variables: {
      title,
      completed: false
    }})
  }
  return (
    <Form wrapperCol={{ span: 16 }} onFinish={onFinish} initialValues={{title: "1"}}>
      <Form.Item name="title">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Добавить</Button>
      </Form.Item> 
    </Form>
  )
}

export default AddForm
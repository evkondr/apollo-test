import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../apollo/todos';
import { Button, Checkbox, Form, Input } from 'antd';

const AddForm = () => {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  const [addTodo, {data, loading, error}] = useMutation(ADD_TODO,{
    pollInterval: 500
  });


  const onFinish = ({title}) => {
    addTodo({variables: {
      title,
      completed: false
    }})
  }
  return (
    <Form wrapperCol={{ span: 16 }} onFinish={onFinish}>
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
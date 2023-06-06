import React from 'react'
import { useQuery } from '@apollo/client';
import { ALL_TODOS } from '../apollo/todos';
import Todo from './Todo';

const TodoContainer = () => {
  const {loading, error, data} = useQuery(ALL_TODOS, {
    variables: {
      page: 1
    }
  });
  if(error){
    return <div className="App">
      <p>Error</p>
    </div>
  }
  if(loading || !data){
    return <p>Loading...</p>
  }
  const {allTodos} = data
  return (
    <div className="todo-container">
        {allTodos.map(todo => <Todo key={todo.id} title={todo.title} compleated={todo.compleated}/>)}
    </div>
  );
}

export default TodoContainer
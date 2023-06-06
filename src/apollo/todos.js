import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
  query allTodos{
  allTodos{
    id,
    title,
    compleated
  }
}
`
export const ADD_TODO = gql`
  mutation addTodo($title:String!){
  createTodo(title:$title, compleated:false){
    id, 
    title, 
    compleated
  }
}
`
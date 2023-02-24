import styles from '../../styles/Todo.module.css'
import { ITodo } from '@/interfaces/Todo'
import {NextPage,GetStaticProps} from 'next'
import React from 'react'

type Props = {
todos: ITodo[]
}

 const TodoPage: NextPage<Props> = ({todos}) => {
  const redirectTo = (todoId: number) => {

  }

    return (
    <div className={styles.todo_main}>
        {todos.map((todo, idx) => (
            <div key={idx} className={styles.todo_item}>
                {todo.title} | {todo.completed ? 'Completed' : 'In Progress'}
            </div>
        ))}
    </div>
    )
  }
  export default TodoPage;
  
  export const getStaticProps: GetStaticProps = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const results =  await data.json()

    return {
        props: {
            todos: results || [],
        }
    }
  }
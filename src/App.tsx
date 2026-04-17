
import { useState } from 'react';
import './App.css'
import TodoBtn from './component/TodoBtn'
import type { Filter,  Todo } from './types/todo';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';



function App() { 
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Buy groceries', completed: true },
    { id: '2', title: 'Walk the dog', completed: false },
    { id: '3', title: 'Read a book', completed: true },
  ]);

  const [filter, setFilter] = useState<Filter>("ALL")


  return (
    <div>
        <h1>Todo</h1>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoBtn filter={filter} setFilter={setFilter} />
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  )
}

export default App


import { useState } from 'react';
import './App.css'
import TodoBtn from './component/TodoBtn'
import type { Todo } from './types/todo';
import TodoList from './component/TodoList';



function App() { 
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Buy groceries', completed: true },
    { id: '2', title: 'Walk the dog', completed: false },
    { id: '3', title: 'Read a book', completed: true },
  ]);
  return (
    <div>
        <h1>Todo</h1>
        <TodoBtn todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
    </div>
  )
}

export default App

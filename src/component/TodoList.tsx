 
import type { Todo } from '../types/todo'

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title} <span>[{todo.completed ? 'x' : ' '}]</span> <span>{todo.completed ? 'completed' : 'pending'}</span>
                </li>
            ))}   
        </ul>
    </div>
  )
}

export default TodoList 
 
import type { Todo } from '../types/todo'
import type { Filter } from '../types/todo'
const TodoList = ({ todos, filter }: { todos: Todo[], filter: Filter }) => {
  return (
    <div>
        <ul>
            { todos.filter(todo => {
                if (filter === "ALL") return true;
                if (filter === "PENDING") return !todo.completed;
                if (filter === "COMPLETED") return todo.completed;
                return false;
            }).map(todo => (
                <li key={todo.id}>
                    {todo.title} <span>[{todo.completed ? 'x' : ' '}]</span> <span>{todo.completed ? 'completed' : 'pending'}</span>
                </li>
            ))}   
        </ul>
    </div>
  )
}

export default TodoList 
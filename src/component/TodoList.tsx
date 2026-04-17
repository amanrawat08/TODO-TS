import type { Todo } from "../types/todo";
import type { Filter } from "../types/todo";
const TodoList = ({
  todos,
  setTodos,
  filter,
}: {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  filter: Filter;
}) => {
  const handleToggle = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ul>
        {todos
          .filter((todo) => {
            if (filter === "ALL") return true;
            if (filter === "PENDING") return !todo.completed;
            if (filter === "COMPLETED") return todo.completed;
            return false;
          })
          .map((todo) => (
            <li key={todo.id}>
              {todo.title} <span>{!todo.completed ? "❌" : "✅"}</span>
              {!todo.completed ? (
                <span style={{ color: "red" }}> (Pending)</span>
              ) : (
                <span style={{ color: "green" }}> (Completed)</span>
              )}
              {!todo.completed ? (
                <input
                  type="checkbox"
                  name={todo.id}
                  id={todo.id}
                  onChange={() => handleToggle(todo.id)}
                />
              ) : (
                <input type="checkbox" name={todo.id} id={todo.id} checked />
              )}

              <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>
                Delete
              </button>


            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

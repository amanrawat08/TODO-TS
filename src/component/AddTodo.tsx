import { useState } from "react";
import type { Todo } from "../types/todo";

const AddTodo = ({ todos, setTodos }: { todos: Todo[]; setTodos: (todos: Todo[]) => void }) => {

    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

         
        const newTodo: Todo = {
            id: Date.now().toString(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        e.currentTarget.reset();
        setTitle("");

    }
  return (
    <div style={{ marginBottom: "20px" }}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a new todo' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo

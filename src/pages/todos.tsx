import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

interface Todo {
    _id: string;
    title: string;
    completed: boolean;
  }

const Todos = () => {
  const auth = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    };

    if (auth) fetchTodos();
  }, [auth]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

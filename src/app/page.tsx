'use client';

import { useEffect, useState } from 'react';
import Layout from './layout';
import { useRouter } from 'next/navigation';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenFromCookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      setToken(tokenFromCookie);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      const fetchTodos = async () => {
        const res = await fetch('/api/todos');
        const data = await res.json();
        setTodos(data);
      };
      fetchTodos();
    }
  }, [token, router]);

  return (
    <Layout>
      <h1>Welcome to My Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Page;

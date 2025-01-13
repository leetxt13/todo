import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
// import { v4 as uuid4v } from 'uuid';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새로운 todo를 todos에 업데이트 해야한다.
  const filtered = getFilteredItems(todos, filter); // filtered된 todo만 설정된 변수
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            id={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
  function readTodosFromLocalStorage() {
    console.log('readTodosFromLocalStorage');
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  }
  function getFilteredItems(todos, filter) {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  }
}

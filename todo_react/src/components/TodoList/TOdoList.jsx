import React, { useState } from 'react';
import AddList from '../AddList/AddList';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodo] = useState([
    { id: '123', text: 'test', status: 'active' },
    { id: '124', text: 'test2', status: 'active' },
  ]);
  const onAdd = (todo) => setTodo([...todos, todo]);
  const handleUpdate = (update) =>
    setTodo(todos.map((item) => (item.id === update.id ? update : item)));
  const handleDelete = (delelted) =>
    setTodo(todos.filter((item) => item.id !== delelted.id));

  const filterItems = (todos, filter) => {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((list) => list.status === filter);
  };
  return (
    <section>
      <AddList onAdd={onAdd} />
      <ul>
        {filterItems(todos, filter).map((list) => (
          <Todo
            key={list.id}
            item={list}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

import React, { useState } from 'react';
import AddList from '../AddList/AddList';

export default function TodoList() {
  const [todos, setTodo] = useState([
    { id: '123', text: 'test', status: 'active' },
    { id: '124', text: 'test2', status: 'active' },
  ]);
  const onAdd = (todo) => setTodo([...todos, todo]);
  return (
    <section>
      <AddList onAdd = {onAdd}/>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </section>
  );
}

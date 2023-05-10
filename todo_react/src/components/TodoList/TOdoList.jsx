import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodo] = useState([
    { id: '123', text: 'test', status: 'active' },
    { id: '124', text: 'test2', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </section>
  );
}

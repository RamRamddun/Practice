import React, { useState } from 'react';

export default function AddList({ onAdd }) {
  const [todotext, setTodotext] = useState('');
  const handleChange = (e) => setTodotext(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todotext.trim().length === 0) {
      setTodotext('');
      return;
    }
    const list = { id: '125', text: todotext, status: 'active' };
    onAdd(list);
    setTodotext('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='inject do it'
        value={todotext}
        onChange={handleChange}
      ></input>
      <button>YES</button>
    </form>
  );
}

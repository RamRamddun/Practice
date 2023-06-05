import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddList.module.css'

export default function AddList({ onAdd }) {
  const [todotext, setTodotext] = useState('');
  const handleChange = (e) => setTodotext(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todotext.trim().length === 0) {
      setTodotext('');
      return;
    }
    const list = { id: uuidv4(), text: todotext, status: 'active' };
    onAdd(list);
    setTodotext('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
      className={styles.input}
        type='text'
        placeholder='dooooo iitt'
        value={todotext}
        onChange={handleChange}
      ></input>
      <button className={styles.button}>YES</button>
    </form>
  );
}

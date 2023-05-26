import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import styles from './Todo.module.css'

export default function Todo({ item, onUpdate, onDelete }) {
  const { id, text, status } = item;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    console.log(status);
    onUpdate({ ...item, status });
  };
  const handleDelete = () => onDelete(item);
  return (
    <li>
      <input
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaRegSadTear />
      </button>
    </li>
  );
}

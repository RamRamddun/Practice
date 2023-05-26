import React from 'react';
import styles from './Footer.module.css'

export default function Footer({
  deleteList,
  currentDeleteList,
  onFilterDelete,
}) {
  return (
    <footer>
      <ul>
        {deleteList.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterDelete(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </footer>
  );
}

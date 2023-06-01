import React from 'react';
import styles from './Header.module.css';

export default function Header({ list, current, onFilterChange }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>do it</h1>
      <ul className={styles.filterList}>
        {list.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                current === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

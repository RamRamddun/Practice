import React from 'react';

export default function Header({ list, current, onFilterChange }) {
  return (
    <>
    <h1>do it</h1>
    <ul>
      {list.map((value, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
    </>
  );
}

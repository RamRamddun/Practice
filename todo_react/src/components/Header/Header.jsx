import React from 'react';

export default function Header({ list, current, onFilterChange }) {
  return (
    <ul>
      {list.map((value, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

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

import React from 'react';
import styles from './Header.module.css';

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className={styles.header}>
      {filters.map((value, index) => (
        <ul className={styles.filters}>
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}{' '}
            </button>
          </li>
        </ul>
      ))}
    </header>
  );
}

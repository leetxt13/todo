import React from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

import { useDarkMode } from '../context/DarkModeContext';

export default function Header({ filter, filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.togglebutton} onClick={toggleDarkMode}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>
      <div className={styles.filterBox}>
        {filters.map((value, index) => (
          <ul className={styles.filters}>
            <li key={index}>
              <button
                onClick={() => onFilterChange(value)}
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
              >
                {value}
              </button>
            </li>
          </ul>
        ))}
      </div>
    </header>
  );
}

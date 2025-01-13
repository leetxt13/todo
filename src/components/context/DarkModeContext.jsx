import React, { createContext, useContext, useEffect, useState } from 'react';
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  // (1) localStorage의 theme에 dark모드인지 확인
  // (2) localStorage에 dark가 없다면 window os에 dark모드를 찾아옴
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkmode) {
  if (darkmode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    // 다크모드가 true이면 html에 dark라는 클래스를 등록해줌
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
// 다른곳에서 useContext가 무슨인자를 받는지 일일이 호출안해됨

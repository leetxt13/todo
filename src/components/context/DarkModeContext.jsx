import React, { createContext, useContext, useState } from 'react';
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    updateDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkmode) {
  if (darkmode) {
    document.documentElement.classList.add('dark');
    // 다크모드가 true이면 html에 dark라는 클래스를 등록해줌
  } else {
    document.documentElement.classList.remove('dark');
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
// 다른곳에서 useContext가 무슨인자를 받는지 일일이 호출안해됨

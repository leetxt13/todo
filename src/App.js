import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './components/context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <DarkModeProvider>
        <Header
          filters={filters}
          filter={filter}
          onFilterChange={(filter) => setFilter(filter)} // 할당되는 변수가 같으면, setFilter만 써도 됨
        />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;

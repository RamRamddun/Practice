import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const listFilter = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(listFilter[0]);
  return (
    <>
      <Header
        list={listFilter}
        current={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
      <Footer />
    </>
  );
}

export default App;

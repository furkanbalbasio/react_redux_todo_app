import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Yapilacaklar Listesi</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import TaskList from './TaskList';
import{ TaskListContextProvider } from './Context/TaskListContext';
function App() {
  return (
    <TaskListContextProvider>
      <div>
      <TaskList />
      </div>
    </TaskListContextProvider>
  );
}
export default App;

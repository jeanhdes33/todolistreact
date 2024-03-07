
import React, { useState, useEffect } from 'react';
import TaskForm from './Componants/TaskForm';
import TaskList from './Componants/TaskList';
import './App.css';

const App = () => {
  const getInitialTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    setTasks(getInitialTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;


import React from 'react';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={toggleTaskCompletion}>
          {task.completed ? 'A faire' : 'Réalisé'}
        </button>
        <button onClick={deleteTask}>Supprimer</button>
      </div>
    </li>
  );
};

export default Task;

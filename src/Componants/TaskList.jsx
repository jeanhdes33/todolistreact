
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
          toggleTaskCompletion={() => toggleTaskCompletion(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

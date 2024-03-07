
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que le titre n'est pas vide
    if (title.trim() === '') {
      alert('Veuillez entrer un titre pour la tâche.');
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };


    addTask(newTask);


    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre :
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description :
        <input
        type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Valider</button>
    </form>
  );
};

export default TaskForm;

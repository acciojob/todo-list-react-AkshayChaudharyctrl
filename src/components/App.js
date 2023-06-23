import React, { useState } from 'react';
import './../styles/App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTasks = [...tasks];
    const newTask = prompt('Enter new task:', updatedTasks[index]);
    if (newTask !== null) {
      updatedTasks[index] = newTask.trim();
      setTasks(updatedTasks);
  };
}

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="add_tasks_section">
        <input
          type="text"
          value={taskInput}
          onChange={handleTaskInputChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks_section">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>{task}</span>
            <button className="edit" onClick={() => editTask(index)}>Edit</button>
            <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


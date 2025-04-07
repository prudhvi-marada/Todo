import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ToDoList from './components/ToDoList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

// function to add a task
  const addTask = () => {
    if (input.trim() === '') {
      setError('Please enter a task before adding.');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
    setError('');
  };

// function to delete a task
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

// function to toggle check box 
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

// function to edit the task
  const editTask = (id, newText) => {
    if (newText.trim() === '') {
      setError('Task cannot be empty while editing.');
      return;
    }
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    
    setError('');
  };

  return (
    <div className="main-container">
      <Header />
      <Body  input={input} setInput={setInput} addTask={addTask} error={error} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
        setError={setError}
      />
    </div>
  );
}

export default App;

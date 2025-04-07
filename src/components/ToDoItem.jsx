import { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleComplete, editTask, setError }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const Save = () => {
    if (newText.trim() === '') {
      setError('You can’t leave the task empty!');
      return;
    }
    editTask(task.id, newText);
    setIsEdit(false);
  };

  const handleEditToggle = () => {
    if (isEdit) {
      Save();
    } else {
      setError('');
      setIsEdit(true);
    }
  };
  
  const handleDeleteTask=()=>{
     if (isEdit){
      alert("you can not delete while editing")
     }else{
      deleteTask(task.id)
     }
  }

  return (
    <div className={`todo-card ${task.completed ? 'done' : ''}`}>
      <div className="left">
        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
        {isEdit ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="right">
        <span
          className="icon edit"
          title="Edit"
          onClick={handleEditToggle}
        >✏️</span>
        <span
          className="icon delete"
          title="Delete"
          onClick={handleDeleteTask}
        >🗑️</span>
      </div>
    </div>
  );
}
export default ToDoItem;

function Body({ input, setInput, addTask, error }) {
    return (
      <div className="body">
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you want to do?"
        />
        <button className="add-button" onClick={addTask}>Add</button>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }
  export default Body;
  
export default function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter the task"
        value={inputVal}
        onChange={writeTodo}
      />
      <button className="input-btn" onClick={addTodo}>
        +
      </button>
    </div>
  );
}

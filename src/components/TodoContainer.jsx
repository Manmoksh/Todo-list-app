import Todo from "./Todo";
export default function TodoContainer({ todos, delTodo }) {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} delTodo={delTodo} />;
      })}
    </div>
  );
}

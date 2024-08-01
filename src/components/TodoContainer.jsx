import Todo from "./Todo";
export default function TodoContainer({ todos }) {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
}

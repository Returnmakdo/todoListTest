import { useState } from "react";
import "./App.css";

let number = 3;
function Todo({ todo }) {
  return <div className="todo-title">{todo.title}</div>;
}
function List({ todos, setTodos }) {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
      })}
    </div>
  );
}

function Form({ setTodos, todos }) {
  const init = {
    id: 0,
    title: "",
  };
  const [todo, setTodo] = useState(init);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "") return alert("내용을 입력해주세요");
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(init);
    number++;
  };
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <input type="text" name="title" value={todo.title} className="add-input input-body" onChange={onChangeHandler} />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "자바스크립트 배워보기",
    },
    {
      id: 2,
      title: "리액트 배워보기",
    },
  ]);
  return (
    <div className="layout">
      <Form setTodos={setTodos} todos={todos} />
      <List setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

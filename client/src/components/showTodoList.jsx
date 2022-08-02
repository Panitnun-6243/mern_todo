import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function TodoCard({ data, handleDelete }) {
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="title-description">
        <div>{title}</div>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <button className="button">edit</button>
        <button className="button" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

export default function ShowTodoList() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(e) {
    axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  return (
    <section className="container">
      <section className="contents">
        <h1>Todo List</h1>
        <div
          style={{
            marginBottom: "2rem",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "24px",
          }}
        >
          <Link to="/create-todo" className="button-new">
            <button className="button">Create new todo</button>
          </Link>
        </div>

        <ul className="list-container">
          {todo.map((data) => (
            <TodoCard data={data} handleDelete={handleDelete} />
          ))}
        </ul>
      </section>
    </section>
  );
}

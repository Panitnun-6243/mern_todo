import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function TodoCard({ data }) {
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="title-description">
        <div>{title}</div>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <button className="button">edit</button>
        <button className="button">delete</button>
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

  return (
    <section className="container">
      <section className="contents">
        
        <h1>Todo List</h1>
        <div style={{marginBottom:"2rem", width:"100%", display:"flex", justifyContent:"flex-start", paddingLeft:"24px"}}><Link to="/create-todo" className="button-new">
          <button className="button">Create new todo</button>
        </Link></div>
        
        <ul className="list-container">
          {todo.map((data) => (
            <TodoCard data={data} />
          ))}
        </ul>
      </section>
    </section>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import UpdateTodo from "./updateTodo";

function TodoCard({ data, handleDelete, handleEdit }) {
  const { _id, title, description } = data;
  return (
    <li key={_id}>
      <div className="title-description">
        <div>{title}</div>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <button className="button" name={_id} onClick={handleEdit}>
          edit
        </button>
        <button className="button" name={_id} onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

export default function ShowTodoList() {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

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
  }, [update]);

  function handleDelete(e) {
    axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }
  //to open modal
  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
  }
  //to re-render after update
  function handleUpdate() {
    console.log("update:", update, !update);
    setUpdate(!update);
  }
  //to cancel update
  function handleClose() {
    setId("");
    setOpen(false);
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
            <TodoCard
              data={data}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </section>
      {open ? (
        <section className="update-container">
          <div className="update-contents">
            <p onClick={handleClose} className="close">
              &times;
            </p>

            <UpdateTodo
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}

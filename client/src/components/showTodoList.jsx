import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function TodoCard({data}){
    const {_id, title, description} = data
    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default function ShowTodoList() {
  const [todo, setTodo] = useState([])

  return (
    <section className="container">
        <section className="contents">
            <h1>Todo List</h1>
            <ul className="list-container">List of todo</ul>
        </section>
    </section>
  )
}

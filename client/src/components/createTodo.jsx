import { useState } from "react";
import axios from "axios";
import React from "react";

export default function CreateTodo() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      title: data.title,
      description: data.description,
    };

    console.log({ todo });
    axios
      .post("http://localhost:8000/api/todo", data)
      .then((res) => {
        setData({ title: "", description: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error! Couldn't create todo");
        console.log(err.message);
      });
  }

  return <div>CreateTodo</div>;
}

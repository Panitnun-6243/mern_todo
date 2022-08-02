import { useState } from "react";
import axios from "axios";

import React from "react";

export default function UpdateTodo({ _id, title, description }) {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ id }, { data });

    axios
      .put(`http://localhost:8000/api/todo/${_id}`, data)
      .then((res) => {
        console.log(res.data.message);
        setData({ title: "", description: "" });
      })
      .catch((err) => {
        console.log("Error! failed to update todo");
        console.log(err.message);
      });
  }

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
        handleEdited();
        handleClose();
      }}
    >
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        name="title"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        Description
      </label>
      <input
        type="text"
        name="description"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

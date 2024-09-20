"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    setTask("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-4">
          <div className="flex flex-col w-2/3">
            <div className="mb-2">
              <h5 className="text-2xl font-semibold">{t.task}</h5>
            </div>
            <div>
              <h6 className="text-lg font-medium text-gray-600">{t.desc}</h6>
            </div>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 text-white rounded px-3 py-1.5 text-bold items-center mb-4 mr-3"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-5xl text-center my-2 p-4 font-bold">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-2 border-zinc-800 m-8 px-4 py-2"
          placeholder="Enter Task Here"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>

        <input
          type="text"
          className="text-2xl border-2 border-zinc-800 m-8 px-4 py-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>

        <button className="bg-black text-white font-bold py-2 px-4 text-2xl ml-20">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;

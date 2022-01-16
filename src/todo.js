import React from "react";
import { useState } from "react";
import { uid } from "uid";

export default function Todo() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  function submit(e) {
    e.preventDefault();

    const cData = [...data];
    const oct = {
      id: uid(),
      title: value,
    };
    cData.push(oct);
    setData(cData);
  }
  return (
    <div>
      <label>masukkan kata</label>
      <form onSubmit={submit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="masukkan :"
        />
        <button>Add</button>
      </form>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

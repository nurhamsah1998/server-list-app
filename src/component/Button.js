import React from "react";

export default function Button() {
  function s(id) {}
  return (
    <form onSubmit={s}>
      <input className="p-1 bg-emerald-500 font-bold text-white rounded-lg" />
      <button>save</button>
    </form>
  );
}

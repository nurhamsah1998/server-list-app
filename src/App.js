import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Data from "./Data";
function App() {
  const [value, setvalue] = useState("");
  const [age, setAge] = useState("");
  const [domosili, setDomisili] = useState("");
  const [status, setStatus] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [db, setDb] = useState();
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(true);

  function serverFirstTimeLoad() {
    axios.get("http://localhost:8000/post").then((res) => {
      setDb(res.data);
    });
  }
  useEffect(() => {
    serverFirstTimeLoad();
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      id: 1 + Math.random(),
      name: value,
      umur: age,
      domisili: domosili,
      status: status,
      pekerjaan: pekerjaan,
    };

    axios.post("http://localhost:8000/post", body).then((res) => {
      serverFirstTimeLoad();
    });
    if ((value, age, domosili == "")) {
      alert("Nama, Umur, dan Domisili WAJIB DIISI!!");
      return false;
    }
    setvalue("");
    setAge("");
    setDomisili("");
    setStatus("");
    setPekerjaan("");
  }
  function handleDelete(e) {
    let x = db;
    axios.delete("http://localhost:8000/post/" + e._id).then((res) => {
      serverFirstTimeLoad();
    });
    if (x?.length == 1) {
      setToggle(false);
      setText(true);
    }
  }

  function handleUpdate(dat) {
    const body = {
      id: 1 + Math.random(),
      name: dat.name,
      umur: dat.umur,
      domisili: dat.domisili,
      status: dat.status,
      pekerjaan: dat.pekerjaan,
    };
    axios.patch("http://localhost:8000/post/" + dat._id, body).then((res) => {
      serverFirstTimeLoad();
    });
  }
  function handleTogle() {
    const x = prompt("masukkan password?");
    if (x == "nurhamsah") {
      setToggle(!toggle);
      setText(!text);
    }
  }
  function handleTogle1() {
    setText(!text);
    setToggle(false);
  }
  return (
    <div className="m-1 flex justify-between ">
      <div className=" pt-[65px] w-[150px]">
        {db?.length > 0 ? (
          <div className=" w-[150px]">
            {text ? (
              <button
                onClick={handleTogle}
                className=" rounded-md bg-green-500 hover:bg-green-600 w-full text-white font-bold"
              >
                Edit Mode
              </button>
            ) : (
              <button
                onClick={handleTogle1}
                className=" rounded-md bg-red-500 hover:bg-red-600 w-full text-white font-bold"
              >
                Exit Edit Mode
              </button>
            )}
          </div>
        ) : null}
      </div>

      <div>
        <p className="text-center font-bold text-[40px]">DATA VAKSIN PARA MAFIA</p>
        <div className="">
          <Data
            looping={db}
            nama={handleUpdate}
            age={handleUpdate}
            wilayah={handleUpdate}
            life={handleUpdate}
            deleteItem={handleDelete}
            work={handleUpdate}
            editMode={toggle}
          />
        </div>
      </div>

      <div className="w-[450px] mt-5">
        <p className="text-center font-bold text-[30px] mb-10">FORMULIR CALON VAKSINASI</p>
        <form className="grid" onSubmit={handleSubmit}>
          <label>Nama :</label>
          <input
            autoFocus
            placeholder="Masukkan Nama"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            className="border-[1px] py-1 px-1 border-gray-700"
          />
          <div className="grid items-baseline mt-4">
            <label>Umur :</label>
            <div className="flex items-baseline">
              <input
                placeholder="Masukan Umur"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border-[1px] py-1 px-1 border-gray-700"
              />
              <label className="ml-4">Tahun</label>
            </div>
          </div>
          <div className="grid mt-4">
            <label>Alamat Domisili</label>
            <input
              placeholder="Masukkan Domisili"
              value={domosili}
              onChange={(e) => setDomisili(e.target.value)}
              className="border-[1px] py-1 px-1 border-gray-700"
            />
          </div>
          <div className="grid mt-4">
            <label>Status</label>
            <input
              placeholder="Masukkan Status Hubungan"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-[1px] py-1 px-1 border-gray-700"
            />
          </div>
          <div className="grid mt-4">
            <label>Pekerjaan</label>
            <input
              placeholder="Pekerjaan"
              value={pekerjaan}
              onChange={(e) => setPekerjaan(e.target.value)}
              className="border-[1px] py-1 px-1 border-gray-700"
            />
          </div>

          <button className="mt-5 rounded-md bg-amber-500 hover:bg-amber-600 p-2 text-white font-bold">
            kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
function App() {
  const [value, setvalue] = useState("");
  const [age, setAge] = useState("");
  const [domosili, setDomisili] = useState("");
  const [status, setStatus] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({});
  const [valEdit, setValEdit] = useState("");
  const [editUmur, setEditUmur] = useState("");
  const [editDomisili, setEditDomisili] = useState("");
  const [editStatus, setEditeditStatus] = useState("");
  const [editPekerjaan, setEditeditPekerjaan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const x = [...data];
    const body = {
      id: 1 + Math.random(),
      name: value,
      umur: age,
      domisili: domosili,
      status: status,
      pekerjaan: pekerjaan,
    };
    if ((value, age, domosili == "")) {
      alert("Nama, Umur, dan Domisili WAJIB DIISI!!");
      return false;
    }

    x.push(body);
    setData(x);
    setvalue("");
    setAge("");
    setDomisili("");
    setStatus("");
    setPekerjaan("");
  }
  function handleDelete(id) {
    console.log(id);
    const x = [...data];
    const f = x.filter((i) => i.id !== id);
    const w = prompt("masukan password :");
    if (w == "aku benci WIBU") {
      setData(f);
      alert("Delete Berhasil");
    } else {
      alert("password anda salah");
    }
  }
  function handleEdit(dat) {
    setEdit(dat);
  }
  function handleBack() {
    setEdit("");
  }
  function handleSave() {
    const x = [...data];
    x.map((item) => {
      if (item.id == editDomisili.id) {
        item.domisili = editDomisili.domisili;
      }
    });
    x.map((item) => {
      if (item.id == valEdit.id) {
        item.name = valEdit.name;
      }
    });
    x.map((item) => {
      if (item.id == editUmur.id) {
        item.umur = editUmur.umur;
      }
    });
    x.map((item) => {
      if (item.id == editStatus.id) {
        item.status = editStatus.status;
      }
    });
    x.map((item) => {
      if (item.id == editPekerjaan.id) {
        item.pekerjaan = editPekerjaan.pekerjaan;
      }
    });

    setEdit("");
  }
  return (
    <div className="m-5 flex justify-between ">
      <div>
        <p className="text-center font-bold text-[40px]">DATA VAKSIN PARA MAFIA</p>
        <div className="flex overflow-auto flex-wrap h-[500px] w-[650px] ">
          {data.map((item) => {
            if (item.id == edit.id) {
              return (
                <div className="m-3" key={item.id}>
                  <div className="flex relative bg-teal-600 text-white p-3 rounded-md items-baseline">
                    <div className="mt-10">
                      <p className="mt-5 font-bold">Nama</p>
                      <p className="mt-5 font-bold">Umur</p>
                      <p className="mt-5 font-bold">Domisili</p>
                      <p className="mt-5 font-bold">Status</p>
                      <p className="mt-5 font-bold">Pekerjaan</p>
                      <p className="mt-5 font-bold">ID CODE</p>
                    </div>
                    <div className="mt-10 items-stretch">
                      <div className="flex ml-3">
                        <input
                          placeholder={item.name}
                          className="text-black px-2 outline-none"
                          onChange={(e) => setValEdit({ id: item.id, name: e.target.value })}
                        />
                      </div>
                      <div className="flex mt-5 ml-3">
                        <input
                          placeholder={item.umur}
                          type="number"
                          className="text-black px-2 outline-none"
                          onChange={(e) => setEditUmur({ id: item.id, umur: e.target.value })}
                        />
                      </div>
                      <div className="flex mt-5 ml-3">
                        <input
                          placeholder={item.domisili}
                          className="text-black px-2 outline-none"
                          onChange={(e) =>
                            setEditDomisili({ id: item.id, domisili: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex mt-5 ml-3">
                        <input
                          placeholder={item.status}
                          className="text-black px-2 outline-none"
                          onChange={(e) =>
                            setEditeditStatus({ id: item.id, status: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex mt-5 ml-3">
                        <input
                          placeholder={item.pekerjaan}
                          className="text-black px-2 outline-none"
                          onChange={(e) =>
                            setEditeditPekerjaan({ id: item.id, pekerjaan: e.target.value })
                          }
                        />
                      </div>

                      <p className="mt-5 ml-7"> : {item.id}</p>
                    </div>
                    <div className="absolute flex top-0 right-0 mr-3">
                      <button
                        onClick={() => handleSave(item)}
                        className="ml-5 rounded-md mt-4 bg-teal-500 p-1 text-white font-light"
                      >
                        Save
                      </button>
                      <a
                        onClick={handleBack}
                        className="ml-5 cursor-pointer rounded-md mt-4 bg-red-500 p-1 text-white font-light"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div className="m-3" key={item.id}>
                <div className="flex relative bg-sky-600 text-white p-3 rounded-md items-center">
                  <div className="mt-10">
                    <p className="mt-1 font-bold">Nama</p>
                    <p className="mt-1 font-bold">Umur</p>
                    <p className="mt-1 font-bold">Domisili</p>
                    <p className="mt-1 font-bold">Status</p>
                    <p className="mt-1 font-bold">Pekerjaan</p>
                    <p className="mt-1 font-bold">ID CODE</p>
                  </div>
                  <div className="mt-10">
                    <p className="mt-1 ml-7"> : {item.name}</p>
                    <p className="mt-1 ml-7"> : {item.umur} tahun</p>
                    <p className="mt-1 ml-7"> : {item.domisili}</p>
                    <p className="mt-1 ml-7"> : {item.status}</p>
                    <p className="mt-1 ml-7"> : {item.pekerjaan}</p>
                    <p className="mt-1 ml-7"> : {item.id}</p>
                  </div>
                  <div className="absolute top-0 right-0 mr-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="rounded-md mt-4 bg-red-500 p-1 text-white font-light"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="ml-5 rounded-md mt-4 bg-teal-500 p-1 text-white font-light"
                    >
                      modify
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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

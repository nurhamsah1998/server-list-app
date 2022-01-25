import React, { useState } from "react";
import EmptyData from "./component/StyleEmptyData.module.css";

function Data({ looping, deleteItem, nama, age, wilayah, life, work, editMode, popo }) {
  const [db, setDb] = useState({});
  const [name, setName] = useState({});
  const [umur, setUmur] = useState({});
  const [domisili, setDomisili] = useState({});
  const [status, setStatus] = useState({});
  const [pekerjaan, setPekerjaan] = useState({});

  function handleUpdate(i) {
    setDb(i);
    setName(i.name);
    setUmur(i.umur);
    setDomisili(i.domisili);
    setStatus(i.status);
    setPekerjaan(i.pekerjaan);
  }
  function handleSave() {
    nama(name);
    age(umur);
    wilayah(domisili);
    life(status);
    work(pekerjaan);
    setDb({});
  }
  return (
    <div className="overflow-auto relative border-[3px] rounded-xl border-slate-800 h-[600px] w-[750px]">
      {looping?.length == 0 ? (
        <div className={EmptyData.text}>
          <p className="text-[40px] font-bold text-center text-gray-400">Data Dari User Kosong</p>
        </div>
      ) : null}
      <div className="flex flex-wrap">
        {Array.isArray(looping)
          ? looping.map((item) => {
              if (item._id == db._id) {
                return (
                  <div className="m-3" key={item._id}>
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
                            onChange={(e) => setName({ _id: item._id, name: e.target.value })}
                            placeholder={item.name}
                            className="text-black px-2 outline-none"
                          />
                        </div>
                        <div className="flex mt-5 ml-3">
                          <input
                            onChange={(e) => setUmur({ _id: item._id, umur: e.target.value })}
                            placeholder={item.umur}
                            type="number"
                            className="text-black px-2 outline-none"
                          />
                        </div>
                        <div className="flex mt-5 ml-3">
                          <input
                            onChange={(e) =>
                              setDomisili({ _id: item._id, domisili: e.target.value })
                            }
                            placeholder={item.domisili}
                            className="text-black px-2 outline-none"
                          />
                        </div>
                        <div className="flex mt-5 ml-3">
                          <input
                            onChange={(e) => setStatus({ _id: item._id, status: e.target.value })}
                            placeholder={item.status}
                            className="text-black px-2 outline-none"
                          />
                        </div>
                        <div className="flex mt-5 ml-3">
                          <input
                            onChange={(e) =>
                              setPekerjaan({ _id: item._id, pekerjaan: e.target.value })
                            }
                            placeholder={item.pekerjaan}
                            className="text-black px-2 outline-none"
                          />
                        </div>

                        <p className="mt-5 ml-7"> : {item._id}</p>
                      </div>
                      <div className="absolute flex top-0 right-0 mr-3">
                        <button
                          type="submit"
                          onClick={handleSave}
                          className="ml-5 rounded-md mt-4 bg-teal-500 p-1 text-white font-light"
                        >
                          Save
                        </button>
                        <a
                          onClick={() => setDb("")}
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
                <div key={item._id} className="m-1">
                  <div className="w-[340px] h-[280px] relative hover:bg-sky-600 duration-200 bg-sky-700 text-white p-3 rounded-md items-center">
                    <div className="mt-10 text-md">
                      <div className="flex ">
                        <label className="w-[100px]">Nama</label>
                        <p className="ml-2"> : {item.name}</p>
                      </div>
                      <div className="flex mt-2">
                        <label className="w-[100px]">Umur</label>
                        <p className="ml-2"> : {item.umur}</p>
                      </div>
                      <div className="flex mt-2">
                        <label className="w-[100px]">Alamat</label>
                        <p className="ml-2"> : {item.domisili}</p>
                      </div>
                      <div className="flex mt-2">
                        <label className="w-[100px]">Status</label>
                        <p className="ml-2"> : {item.status}</p>
                      </div>
                      <div className="flex mt-2">
                        <label className="w-[100px]">Pekerjaan</label>
                        <p className="ml-2"> : {item.pekerjaan}</p>
                      </div>
                      <div className="flex mt-2">
                        <label className="w-[100px]">Pekerjaan</label>
                        <p className="ml-2"> : {looping.length}</p>
                      </div>
                      <div className="pt-6">
                        <p className=" text-right text-sm">{item._id}</p>
                      </div>
                    </div>
                    <div className="absolute flex top-0 right-0 mr-3">
                      <div className="flex">
                        <div></div>

                        <div>
                          {editMode ? (
                            <div className="">
                              <button
                                onClick={() => deleteItem(item)}
                                className="rounded-md mt-4 bg-red-600 p-1 text-white font-bold"
                              >
                                delete
                              </button>
                              <button
                                onClick={() => handleUpdate(item)}
                                className="ml-5 rounded-md mt-4 bg-teal-600 p-1 text-white font-bold"
                              >
                                modify
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Data;

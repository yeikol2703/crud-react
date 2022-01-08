import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Navbar } from "./Navbar";



const initialDb = [
  {
    id: 1,
    name: "Yeikol",
    lastname: "Villalobos",
  },
  {
    id: 2,
    name: "Naruto",
    lastname: "Uzumaki",
  },
  {
    id: 3,
    name: "Luffy",
    lastname: "Monkey D",
  },
  {
    id: 4,
    name: "Pablo",
    lastname: "Gatgens",
  },
  {
    id: 5,
    name: "Melissa",
    lastname: "Mora",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <Navbar/>       
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
      <a href="https://github.com/yeikol2703" className="link-github"> Yeikol Villalobos <i class="bi bi-github"></i></a>

    </div>
  );
};

export default CrudApp;

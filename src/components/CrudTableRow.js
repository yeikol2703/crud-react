import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, lastname, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>
        <button className="btn btn-warning" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="btn btn-danger" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;

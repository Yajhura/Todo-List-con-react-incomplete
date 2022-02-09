import React from "react";

const Filtro = ({ filtro, setFiltro }) => {
       
    const filtrar ={
      completed : false
    }

    console.log(filtro);
    
  return (
    <select
      className="form-select   form-select-lg mb-3"
      aria-label=".form-select-lg example"
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
    >
      <option>--seleccione--</option>
      <option value={filtrar.completed}>Completados</option>
      <option value={!filtrar.completed}>No completados</option>
      <option value="">Todos</option>
    </select>
  );
};

export default Filtro;

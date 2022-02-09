import React, { useState,useEffect } from "react";

const Formulario = ({todoAdd,todoEdit,updateTodo,setTodoEdit}) => {
  const [todo,setTodo] = useState(
    {  tittle : "",
      descripcion : "",
      
      }
  )
  todo.completed = false
  
   //editar
   const {tittle, descripcion} = todo
   useEffect(() => {
      
     if (todoEdit) {
      setTodo(todoEdit)
     }else{
       setTodo({
        tittle : "",
        descripcion : "",
       })
     }
   }, [todoEdit]);
  
//agregar
//leendo los datops
  const onChangeInput = (e)=>{
    setTodo({
      ...todo,
      [e.target.name] : e.target.value
    })
  }
//agregando
   const handllSubmit = e=>{
     e.preventDefault();
    if (tittle.trim() === ""||descripcion.trim() === "") {
      alert("los campos no pueden ir vacios")
      return;
    }   

    if (todoEdit) {
      updateTodo(todo)
    
    }else{
      todoAdd(todo)
      setTodo({
        tittle : "",
        descripcion : ""
      })
    }
  
    
   }
   
  return (
    <>
       {
         todoEdit &&
         <button
         onClick={() => setTodoEdit(null)}
         className="btn btn-sm btn-warning m-2 p-1 w-100"
         >Cancelar Edicion
         </button>
       }
      <form 
       onSubmit={handllSubmit}
      className="w-75 p-2" action="">
        <label htmlFor="Titulo" className="my-2 form-label">
          Titulo
        </label>

        <input
          id="Titulo"
          className="form-control form-control-lg"
          type="text"
          placeholder=""
          aria-label=".form-control-lg example"
          value={tittle}
          name="tittle"
          onChange={onChangeInput}
          />

        <label htmlFor="Descripcion" className="mt-3 mb-2 form-label">
          Descripcion
        </label>

        <input
          className="my-2 form-control form-control-lg"
          id="Descripcion"
          type="text"
          placeholder=""
          value={descripcion}
          name="descripcion"
          onChange={onChangeInput}
          
          aria-label=".form-control-lg example"
        />
        <button type="submit" className="btn btn-primary w-100 my-2 p-3">
          {todoEdit? "Editar" : "Registrar"}
        </button>
      </form>
  
    </>
  );
};

export default Formulario;

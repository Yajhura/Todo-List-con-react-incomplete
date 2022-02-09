// import React from 'react';
import { useEffect, useState } from "react";
import Formulario from "./Components/Formulario";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEdit,setTodoEdit] = useState(null)
  const [filtro,setFiltro] = useState("")
 
  useEffect(() => {
    const obtenerLS = ()=>{
      const todoLocal = JSON.parse(localStorage.getItem("todolist"))?? []
      setTodos(todoLocal)
    }
    obtenerLS();
    
  }, []);
  
  

  useEffect(() => {
     localStorage.setItem("todolist", JSON.stringify(todos))
  }, [todos]);
  

  //añadir
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const chagedTodos = [...todos, newTodo];

    setTodos(chagedTodos);
  };
  //eliminar
  const deleteTodo = (id) => {
    if  (todoEdit&& id === todoEdit.id) {
      setTodoEdit(null)
    }
    const delTodo = todos.filter((todo) => todo.id !== id);

    setTodos(delTodo);
  };
  ///completar
  const completeTodo = (id) => {
    const changeTodo = todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo

      
    ))
    setTodos(changeTodo);
  };

  //actualizar
  const updateTodo = (todoEdit)=>{
    const changeTodo = todos.map(todo =>
        todo.id === todoEdit.id?
                               todoEdit : todo
    )
    setTodos(changeTodo)
     
  }
  
  //filtrar
  useEffect(() => {
    if (filtro) {
      const todoFilter = todos.filter(todo => todo.completed == filtro)
      console.log(todoFilter); 
      
    }
  }, [filtro])
  
  return (
    <div className="container-md mt-4">
      <div className="row">
        <div className="col-8">
          <h1 className="text-left">Formulario</h1>
          <Formulario 
          todoAdd={todoAdd}
          todoEdit={todoEdit}
          updateTodo={updateTodo}
          setTodoEdit={setTodoEdit}
      
          />
        </div>

        <div className="col-4">
        <h1>
            {todos.length > 0
              ? " lista de Tareas"
              : "No hay tareas disponibles "}
          </h1>
          <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          setTodoEdit={setTodoEdit}
          filtro={filtro}
          setFiltro={setFiltro}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

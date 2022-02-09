import React from 'react';
import Filtro from './Filtro';
import Todo from './Todo';

const TodoList = ({todos,deleteTodo,completeTodo,setTodoEdit,filtro,setFiltro,extract}) => {
  return( 
  <div>
      {todos.length > 0 ? (<Filtro
       filtro={filtro}
       setFiltro={setFiltro}
      />) : ""}
        <div className=' d-flex justify-content-center flex-column w-100'>
        {
          todos.map(todo => (   
               <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              setTodoEdit={setTodoEdit}
              
              />
          ))
      }
        </div>
  </div>);
};

export default TodoList;

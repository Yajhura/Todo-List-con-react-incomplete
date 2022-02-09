import React from 'react';

const Todo = ({todo,deleteTodo,completeTodo,setTodoEdit}) => {
    const {tittle,descripcion,id} = todo
    return (
      <>
        <div className="card m-1 w-100">
          <div className="card-header d-flex justify-content-end">
            <a onClick={()=>completeTodo(todo.id)} href="/#" className="btn btn-success w-50">
              {todo.completed? "Terminado" : "Terminar"}
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center mb-3">{tittle}</h5>
            <p className="card-text my-4">
            {descripcion}
            </p>
            <div className="d-flex justify-content-between ">
              <a onClick={()=> setTodoEdit(todo)} href="/#"  className="btn btn-primary w-25">
                Editar
              </a>
  
              <a onClick={()=> deleteTodo(id)} href="/#"  className="btn btn-danger w-25">
                Eliminar
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Todo;

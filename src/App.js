import {
  useState,
} from 'react';

import { useForm } from './useForm';
import './App.css'
import { Todo } from './Todo';
import { Filter } from './Filter';

export const App = () => {

  /** Filter handler */
  const [filter, setFilter] = useState('all');

  /* Form handler */

  const {values, handleInputChange, restartForm} = useForm({
    todo: ''
  }); // se inicializa el input para añadir tarea

  const { todo } = values; // se obtiene el valor del input 'todo'

  /** Todo handler */

  const [todos, setTodos] = useState([]); // estado para mantener las tareas

  const addToDo = () => {
    if(todo.replace(/ /g, '').length > 0){
      restartForm();
      setTodos([...todos, {
        todo, 
        complete: false
      }]);
    }
  } // se agrega la nueva tarea y se limpia el formulario

  const completeTodo = (i, value) => {
    let currentTodo = todos[i]; // establece la tarea a actualizar utilizando el indice
    currentTodo.complete = value; // cambia el valor complete dela tarea 
    let allTodos = todos; // se crea un nuevo objeto igual al state que podremos modificar
    allTodos[i] = currentTodo; // se cambia la tarea en el objeto duplicado
    setTodos([...allTodos]); // se establece el state de las tareas 
  }

  const deleteTodo = (i) => {
    let filteredTodos = todos.filter((tarea, ind) => ind!==i);
    setTodos([...filteredTodos]);
  }

  const editTodo = (i, value) => {
    if(value.replace(/ /g, "").length > 0){
      let currentTodo = todos[i]; 
      currentTodo.todo = value;
      let allTodos = todos;
      allTodos[i] = currentTodo;
      setTodos([...allTodos]); 
    }
  }

  return (
    <div className='mainDiv'>
      <h1 className='title'>
        To Do List
      </h1>
      <form 
        className='todoDiv'
        onSubmit={(e) => {
          e.preventDefault();
          addToDo();
        }}
      >
        <input 
          type='text' 
          name='todo' 
          className='todoBar' 
          value={todo} 
          onChange={(handleInputChange)}
          autoComplete='off'
        />
        <div 
          className='addButton'
          onClick={addToDo}
        >
          <div className='lineUp'></div>
          <div className='lineDown'></div>
        </div>
      </form>
      <Filter  filter={filter} setFilter={setFilter} />
      <div className='todos' >
          {
            todos.map((tarea, i) => {
              return (
                <Todo 
                  key={i} 
                  tarea={tarea} 
                  ind={i} 
                  completeTodo={completeTodo} 
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
            })
          }
      </div>
    </div>
  );
}
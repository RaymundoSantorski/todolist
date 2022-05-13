import {
  useState,
} from 'react';

import { useForm } from './useForm';
import './App.css'

export const App = () => {

  const {values, handleInputChange, restartForm} = useForm({
    todo: ''
  }); // se inicializa el input para añadir tarea
  const { todo } = values; // se obtiene el valor del input 'todo'

  const [todos, setTodos] = useState([]); // estado para mantener las tareas


  const addToDo = () => {
    restartForm();
    setTodos([...todos, todo]);
  } // se agrega la nueva tarea y se limpia el formulario

  return (
    <div className='mainDiv'>
      <h1 className='title'>
        To Do List
      </h1>
      <div className='todoDiv'>
        <input 
          type='text' 
          name='todo' 
          className='todoBar' 
          value={todo} 
          onChange={handleInputChange}
        />
        <div 
          className='addButton'
          onClick={addToDo}
        >
          <div className='lineUp'></div>
          <div className='lineDown'></div>
        </div>
      </div>
      <div className='todos' >
          {
            todos.map((tarea, i) => {
              return (
                <div key={i}>
                  <p>{tarea}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}
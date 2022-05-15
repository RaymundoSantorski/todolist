import {
  useState,
} from 'react';

import { useForm } from './useForm';
import './App.css'
import { Todo } from './Todo';

export const App = () => {

  const {values, handleInputChange, restartForm} = useForm({
    todo: ''
  }); // se inicializa el input para añadir tarea
  const { todo } = values; // se obtiene el valor del input 'todo'

  const [todos, setTodos] = useState([]); // estado para mantener las tareas


  const addToDo = () => {
    if(todo.replace(' ', '').length > 0){
      restartForm();
      setTodos([...todos, {
        todo, 
        complete: false
      }]);
    }
  } // se agrega la nueva tarea y se limpia el formulario

  const completeTodo = (i, value) => {
    let currentTodo = todos[i];
    currentTodo.complete = value;
    let allTodos = todos;
    allTodos[i] = currentTodo;
    setTodos([...allTodos]);
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
      <div className='todos' >
          {
            todos.map((tarea, i) => {
              return (
                <Todo key={i} tarea={tarea} ind={i} completeTodo={completeTodo} />
              )
            })
          }
      </div>
    </div>
  );
}
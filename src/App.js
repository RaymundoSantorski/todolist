import { useForm } from './useForm';
import './App.css'

export const App = () => {

  const {values, handleInputChange} = useForm({
    todo: ''
  });

  const { todo } = values;

  return (
    <div className='mainDiv'>
      <h1 className='title'>
        To Do List
      </h1>
      <div className='searchDiv'>
        <input 
          type='text' 
          name='todo' 
          className='searchBar' 
          value={todo} 
          onChange={handleInputChange}
        />
      </div>
      <div className='todos'>

      </div>
    </div>
  );
}
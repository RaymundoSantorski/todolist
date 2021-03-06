import { 
    useState,
} from 'react';

import { useForm } from "./useForm";


export const Todo = ({ 
    tarea, 
    ind, 
    completeTodo, 
    deleteTodo, 
    editTodo
}) => {

    const { todo, complete } = tarea;
    const classComplete = complete ? 'todo completed' : 'todo';

    const { values, handleInputChange} = useForm({
        todoEdit: todo
    });
    const { todoEdit } = values;
    const [edit, setEdit] = useState(false);

    return (
        <div className={classComplete}>
            <div>
                {
                    edit  
                    ? <div className='editDiv'>
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                editTodo(ind, todoEdit);
                                setEdit(false);
                            }}
                            className='formEdit'
                        >
                            <input 
                                type='text'
                                value={todoEdit}  
                                onChange={(handleInputChange)}
                                name='todoEdit'
                                className='todoEditInput'
                                autoFocus
                                onBlur={() => { 
                                    editTodo(ind, todoEdit);
                                    setEdit(false);
                                }}
                            />
                        </form>
                    </div>
                    : <div className='checkDiv'>
                        <input 
                            type='checkbox'
                            className='checkbox'  
                            checked={complete}
                            onChange={(e) => {
                                completeTodo(ind, e.target.checked);
                            }}
                        />
                        <p className='todoText'>{todo}</p>
                    </div> 
                }
            </div>
            <div className='todoActions'>
                <div 
                    className='editButton'
                    onClick={() => { setEdit((edit) => !edit ) }}
                >
                    <div className='editIcon'></div>
                    <div className='editIcon'></div>
                    <div className='editIcon'></div>
                </div>
                <div 
                    className='deleteButton'
                    onClick={() => { deleteTodo(ind) }}
                >
                    <div className='deleteIcon'></div>
                </div>
            </div>
        </div>
    )
}
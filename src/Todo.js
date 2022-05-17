

export const Todo = ({ tarea, ind, completeTodo }) => {

    const { todo, complete } = tarea;
    const classComplete = complete ? 'todo completed' : 'todo';

    return (
        <div className={classComplete}>
            <div>
                <p>{todo}</p>
            </div>
            <div className='todoActions'>
                <p>Borrar</p>
            </div>
            <div className='checkDiv'>
                <input 
                    type='checkbox'
                    className='checkbox'  
                    checked={complete}
                    onChange={(e) => {
                        completeTodo(ind, e.target.checked);
                    }}
                />
            </div>
        </div>
    )
}
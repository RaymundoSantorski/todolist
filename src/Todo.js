

export const Todo = ({ tarea, ind, completeTodo }) => {

    const { todo, complete } = tarea;
    const classComplete = complete ? 'todo completed' : 'todo';

    return (
        <div className={classComplete}>
            <p>{todo}</p>
            <input 
                type='checkbox'
                className='checkbox'  
                checked={complete}
                onChange={(e) => {
                    completeTodo(ind, e.target.checked);
                }}
            />
        </div>
    )
}
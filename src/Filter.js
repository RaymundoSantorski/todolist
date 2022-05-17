export const Filter = ({ filter, setFilter }) => {
    return (
        <div className='filter'>
            <div 
                className={`filterItem ${filter === 'all' && 'active'}`}
                onClick={() => { setFilter('all') }}
            >
                <p>Todas</p>
            </div>
            <div 
                className={`filterItem ${filter === 'complete' && 'active'}`}
                onClick={() => { setFilter('complete') }}
            >
                <p>Completadas</p>
            </div>
            <div 
                className={`filterItem ${filter === 'uncomplete' && 'active'}`}
                onClick={() => { setFilter('uncomplete') }}
            >
                <p>Incompletas</p>
            </div>
        </div>
    )
}
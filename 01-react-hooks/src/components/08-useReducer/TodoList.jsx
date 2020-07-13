import React from 'react'

export const TodoList = (props) => {
    const { TodoListItem, handleDelete, handleToggle } = props;
    return (TodoListItem.map((todo, pos) => (
        <div className="row" style={{ width: '75%' }} key={todo.id}>
            <li
                key={todo.id}
                className="list-group-item"
                style={{ width: '100%', marginBottom: '15px' }}>
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => { handleToggle(todo.id) }}
                >
                    {pos + 1}. {todo.desc}
                </p>
                <button
                    className="btn btn-danger"
                    style={{ marginLeft: '15px' }}
                    onClick={() => { handleDelete(todo.id) }}
                >
                    Borrar
                            </button>
            </li>
        </div>
    ))

    )
}

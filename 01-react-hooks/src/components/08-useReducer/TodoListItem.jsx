import React from 'react';

export const TodoListItem = props => {
    const {todo,index, handleToggle, handleDelete } = props;
    return (
        <div className="row" style={{ width: '75%' }} key={todo.id}>
            <li
                key={todo.id}
                className="list-group-item"
                style={{ width: '100%', marginBottom: '15px' }}>
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => { handleToggle(todo.id) }}
                >
                    {index + 1}. {todo.desc}
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
    );
}
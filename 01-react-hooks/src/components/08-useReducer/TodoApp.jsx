import React, { useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

   

    //useEffect se ejecuta al menos una vez (el estado inicial)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ul> 
                        <TodoList todoListItem={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
            </div>

        </div>
    )
}

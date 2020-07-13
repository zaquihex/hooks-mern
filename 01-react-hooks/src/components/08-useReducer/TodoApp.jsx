import React, { useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { TodoList } from './TodoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputchange, reset] = useForm({
        description: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length >= 1) {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            }

            const action = {
                type: 'add',
                payload: newTodo
            }

            dispatch(action);
            reset();

        }
    }
    return (
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ul> 
                        <TodoList TodoListItem={todos} handleDelete={handleDelete} handleToggle={handleToggle} /> 
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprender...."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputchange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block" >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

import React from 'react'
import {TodoListItem} from "./TodoListItem";

export const TodoList = (props) => {
    const { todoListItem, handleDelete, handleToggle } = props;
    return (todoListItem.map((todo, pos) => (
        <TodoListItem key={pos} todo={todo} index={pos} handleDelete={handleDelete} handleToggle={handleToggle}/>
    ))

    )
}

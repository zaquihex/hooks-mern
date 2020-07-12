import React from 'react'
import { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        //document.querySelector('input').select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            
            <input ref= { inputRef } className="form-control" placeHolder="Su nombre"/>

            <button 
            className="btn btn-outline-primary"
            onClick={handleClick}
            >
                Focus</button>
        </div>
    )
}

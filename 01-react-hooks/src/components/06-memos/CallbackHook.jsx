import React from 'react'
import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    /*const increment = () => {
        setCounter(counter + 1);
    }*/

    // Usar useCallback cuando el componente hijo está "memorizado"
    const increment = useCallback((num)=> {
        setCounter( c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>CallbackHook { counter } </h1>
            <hr/>
            <ShowIncrement increment={ increment } />
        </div>
    )
}

import React from 'react'
import './layout.css';
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);

    const { quote } = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
       
    }, [quote])

    return (
        <div>
            <h1>Layout!</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>
            <pre>{JSON.stringify(boxSize)}</pre>
            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}

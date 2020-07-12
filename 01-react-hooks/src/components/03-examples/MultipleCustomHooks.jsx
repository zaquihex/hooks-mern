import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);
    console.log(counter);
    const {loading, data} = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);
    console.log(data);
    const { author, quote } = !!data && data[0];
    //console.log(state);
    return (
        <div>
            <h1>Multiple Custome Hooks!</h1>
            <hr />

            {loading ?
                (<div className="alert alert-info text-center"> Loading...</div>)
                :
                (<blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer"> {author} </footer>
                </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}

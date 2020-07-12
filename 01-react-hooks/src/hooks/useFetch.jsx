import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
   const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=> {

        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {
        setState({data: null, loading: true, error: null});
        fetch(url).then(resp => resp.json().then(data => {
            setTimeout(()=>{
                // No cambia el estado si el padre ya no renderiza este componente
                if(isMounted.current) {
                    setState({loading: false,error: null,data});
                }
                else {
                    console.log("Estado no se ha cambiado debido a que el componente se ha desmontado");
                }
                
            },1000);
            
        }));
    }, [url]);

    return state;
}


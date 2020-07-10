import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    // useEffect only when form changes
    useEffect(() => {
        //console.log('formState cambió', formState);
    }, []);

    // useEffect only when name changes
    useEffect(() => {
        //console.log('formState cambió', formState);
    }, [formState.name]);

    // useEffect only when email changes
    useEffect(() => {
        //console.log('formState cambió', formState);
    }, [formState.email]);

    const handleInputChange = (e) => {
        const { target } = e;
        setFormState({...formState, [target.name]: target.value});
    }
    const {name, email} = formState;
    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    classname="form-control" 
                    placeholder="Tu nombre" 
                    autocomplete="off" 
                    value={name} 
                    onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    classname="form-control" 
                    placeholder="email@gmail.com" 
                    autocomplete="off" 
                    value={email} 
                    onChange={handleInputChange} />
            </div>
            {name === '123' && <Message />}
        </>
    )
}
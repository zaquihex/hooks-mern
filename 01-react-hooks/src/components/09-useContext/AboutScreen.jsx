import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const { user,setUser } = useContext(UserContext);
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>
            <pre>{JSON.stringify(user, null, 3)}</pre>
            <button 
                className="container btn btn-warning"
                onClick={()=> setUser(null)}
            >
                Logout
            </button>
        </div>
    )
}

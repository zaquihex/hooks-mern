import React from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink exact activeClassName="active" exact to="/home" className="navbar-brand" href="#">useContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" exact to="/home" className="nav-item nav-link" href="#">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/about" className="nav-item nav-link" href="#">About</NavLink>
                    <NavLink activeClassName="active" exact to="/login" className="nav-item nav-link" href="#">Login</NavLink>
                    <Redirect to="/home" />
                </div>
            </div>
        </nav>
    )
}

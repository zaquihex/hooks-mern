import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                Pedro
            </span>
            <span className='btn btn-outline-danger'>
                <i className="fas fa-sign-out-alt" />
                <span> Salir</span>
            </span>

        </div>;
    }
}

export default Navbar;
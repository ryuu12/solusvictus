import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css';
import './index.css';

class Navbar extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="navbar">
                    <h1 className="navItem navTitle">Solus Victus</h1>
                    <Link to="/" className="navItem-right navLink">Home</Link>
                    <Link to="/about" className="navItem-right navLink">About</Link>
                </div>
            </div>
        )
    }
}

export default Navbar
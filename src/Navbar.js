import { Link } from "react-router-dom";
import React from "react";
import './style.css';
import './style-mobile.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
			    <h1 className="nav-item nav-title">Solusia</h1>
			    <Link to="/organization" className="nav-item nav-link">Organization</Link>
			    <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/" className="nav-item nav-link">Home</Link>
		    </nav>
        )
    }
}

export default Navbar
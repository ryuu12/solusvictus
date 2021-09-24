import React from "react";
import "./style.css"
import "./style-mobile.css"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="row">
                    <div className="col col-text footer-col">
                        <h1 className="footer-title">Solusia</h1>
                        <span className="footer-subtitle">powered by DIGILAB</span>
                    </div>
                    <div className="col col-text col-text-right">
                        <p><a className="footer-link" href="#">DIGILAB Official Site</a></p>
                        <p><a className="footer-link" href="#">Organization</a></p>
                        <p><a className="footer-link" href="#">About Us</a></p>
                    </div>
                </div>
                <hr className="border-line" />
                <div className="row">
                    <p className="copyright">Copyright © Solusia 2021</p>
                </div>
            </footer>
        )
    }
}

export default Footer
import React from "react";
import "./style.css";
import "./style-mobile.css";

function Organization(){
    return(
        <div>
            <section id="Organization">
                <h1 className="org-title">Organization</h1>
                <p className="org-subtitle">Apply to available organization</p>
            </section>
            <section id="List">
                    <div className="row row-left">
                    <div className="col-s">
                    <div className="org-card">
                        <img className="org-card-img" src="https://media.discordapp.net/attachments/865094112725303346/865094478360870942/digilab_logo2.png?width=480&height=480" alt="digilab" />
                        <div className="org-card-content">
                        <h1 className="org-card-title">DIGILAB</h1>
                        <span className="org-card-subtitle">IT Community</span>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>
        </div>
    );
}

export default Organization
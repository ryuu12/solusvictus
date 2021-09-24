import React from "react";
import "./style.css"
import "./style-mobile.css"

function About(){
    return(
    <div>
        <section id="About">
        <div className="row">
            <div className="col col-text">
            <h1 className="banner-title">What is Solusia?</h1>
            <p className="banner-subtitle">Solusia is a platform made by DIGILAB to manage its members. The platform is also capable of providing a registration application form.</p>
            </div>
            <div className="col col-img">
            <img className="banner-img-2" src="https://cdn.discordapp.com/attachments/616638914530246656/888797965836247101/20.-Who-Uses-Coworking-Spaces-Hereu2019s-Everything-to-Know.jpg" alt="" />
            </div>
        </div>
        </section>
        <section id="User">
            <div className="row">
            <div className="col-l col-text col-text-right">
                <img className="user-logo" src="https://media.discordapp.net/attachments/865094112725303346/865094478360870942/digilab_logo2.png?width=480&height=480" alt=""/>
                <h1 className="user-title">Who can use this platform?</h1>
                <p className="user-subtitle">For now, this platform only available for DIGILAB Core Team only. If your organization want to use this platform, please let us know by contacting DIGILAB team.</p>
            </div>
            </div>
        </section>
    </div>
    );
}

export default About
import React from "react";
import "./style.css"
import "./style-mobile.css"

function Home(){
    return(
        <div>
            <header id="Banner">
                <div className="row">
                    <div className="col col-text">
                        <h1 className="banner-title">A Membership Application Platform</h1>
                        <span className="banner-subtitle">powered by DIGILAB</span>
                    </div>
                    <div className="col col-img">
                        <img className="banner-img" src="https://media.discordapp.net/attachments/616638914530246656/888760634643197952/istockphoto-962449026-170667a.jpg" alt="" />
                    </div>
                </div>
            </header>
            <section id="Keep">
                <div className="row">
                    <div className="col col-text">
                        <img className="keep-img" src="https://media.discordapp.net/attachments/616638914530246656/888789763153350686/connection-pngrepo-com.png?width=480&height=480" alt="" />
                    </div>
                    <div className="col col-text">
                        <h1 className="keep-title">Keep in touch with your <span className="color-blue">people information</span></h1>
                        <p className="keep-subtitle">manage your member organization data,<br/> such as status, date joined, and their role.</p>
                    </div>
                </div>
            </section>
            <section id="Use">
                <h1 className="use-title">Ready to use Solusia?</h1>
                <p className="use-subtitle">For now, Solusia is only available for<br/> a limited organization.</p>
            </section>
        </div>
    )
}

export default Home
import React from "react";
import './Header.css'

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "SolusVictus",
            subTitle: "A Membership Management Site."
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        )
    }
}

export default Header
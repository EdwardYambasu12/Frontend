import React from "react";
import "./nav.css"

function Nav(){
    return(
        <>

            <nav className="navbar " id="main_nav">
                <div className="title">
                <img alt="logo" src={require("../images/main_logo.png")} style={{height : "50px", width : "50px", borderRadius : "50%"}}></img>
                <h3>SportsUp</h3>
                
                </div>
                <div className="mid">
                    <input type="text" placeholder="search : Team Player e.t.c" className="form-control"></input>

                </div>

            </nav>
        </>
    )
}
export default Nav
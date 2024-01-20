import React from "react";
import "./footer.css"

function Footer(){
    return(
        <>

            <nav className="main_footer bg-dark fixed-bottom">
                
            <button className="btn btn-light btn-lg">Contact Us</button>
               <button className = "btn btn-success btn-lg">Register</button>
               <button className="btn btn-info btn-lg">Sign up</button>
               <button className = "btn btn-dark btn-lg">Translate</button>
               
            </nav>
        </>
    )
}
export default Footer
import React, { useState } from "react";
import Nav from "../nav_bar/nav";
import Scores from "../scores/scores";
import Infos from "../infos/infos";
import "./home.css"
import Footer from "../scores/footer/footer";
function Home(){

    const [color1, setColor1] = useState("btn btn-light")
    const [color2, setColor2] = useState("btn btn-dark")
    const [content, setContent] = useState(<Scores/>)


    function ne(){
        setColor1("btn btn-dark")
        setColor2("btn btn-light")
        setContent(<Infos/>)
    }

    function sc(){
        setColor1("btn btn-light")
        setColor2("btn btn-dark")
        setContent(<Scores/>)
    }

    

    return(
        <body style={{backgroundColor: 'rgb(2, 2, 34)'}}>
        <Nav> </Nav>
        <div className="button_list">
        <button className= {color1} id = "scores" onClick={()=>sc()}>SCORES</button>
        <button className= {color2} id = "news" onClick={()=>ne()}>NEWS</button>
        </div>
        <hr></hr>
        <div className="contents">{content}</div>
        <Footer></Footer>
        </body>
    )
}   

export default Home
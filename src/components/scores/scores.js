import React from "react";
import "./scores.css"
import Leagues from "../leagues/leagues";
import Matches from "./matches";
import { Link } from "react-router-dom";

function Scores(){
   
    return(
        <body style={{maxHeight : window.innerHeight-100, backgroundColor : "inherit"}}>
            <div className="row">

                <div className="col-md-2 order-md-1">
                    <div id="leagues">

                    <h3 className="text-center text-light">Leagues</h3>
                    <div  style={{overflowY : "auto", maxHeight : window.innerHeight-200}}>
                    <Leagues/>
                    </div>
                    </div>
                   
                    <Link to={'/minor'} id = "select_league" className="btn btn-dark" >Select League</Link>
                </div>
                
                <div className="col-md-8 order-md-2" id="scores_line">
                    <Matches/>
                    <button className="btn btn-warning" style={{position : "fixed", bottom:"2%", right : "0%"}}>📌 Pinned Matches</button>
                </div>

                <div className="col-md-2 order-md-3">
                    <h3 className="text-center">Ads</h3>
                </div>
            </div>

            
        </body>
    )
}

export default Scores
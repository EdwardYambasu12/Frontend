import React, { useState, useEffect, useRef } from "react";
import "./matches.css"
import { Link } from "react-router-dom";

import Today from "./today";
import Tomorrow from "./tomorrow"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Nav from "../nav_bar/nav";
function Live(){

    var epl = []
    var wc= []
    var cl= []
    var eup= []
    var con= []
    var afcon= []
    var euros= []
    var asia= []
    var copa= []
    var laliga= []
    var seria_a= []
    var bundeslisga= []
    var ligue1= []
    var fa_cup= []
    var copadel= []
    var mls = []
    var sui = []
    var others = []
    

    const [epl1, setpl] = useState()
    const [wc1, setwc] = useState()
    const [cl1, setcl] = useState()
    const [eup1, seteup] = useState()
    const [con1, setcon] = useState()
    const [afcon1, setafcon] = useState()
    const [euros1, seteuros] = useState()
    const [asia1, setasia] = useState()
    const [copa1, setcopa]  = useState()
    const [laliga1, setlaliga] = useState()
    const [seria1, setseria] = useState()
    const [bundeslig1, setbundesliga] = useState()
    const [ligue, setligue] = useState()
    const [fa_cup1, setfa] = useState()
    const [copadel1, setcopadel] = useState()
    const [mls1, setmls] = useState()
    const [saudi, setsaudi] = useState()
    const [others1, setothers] = useState()

    var [epl2, setepl2]= useState({name : "", crest : ""})
    var [others2, setothers2]= useState({name : "", crest : ""})
    const [wc2, setwc2] = useState({name : "", crest : ""})
    const [cl2, setcl2] = useState({name : "", crest : ""})
    const [eup2, seteup2] = useState({name : "", crest : ""})
    const [con2, setcon2] = useState({name : "", crest : ""})
    const [afcon2, setafcon2] = useState({name : "", crest : ""})
    const [euros2, seteuros2] = useState({name : "", crest : ""})
    const [asia2, setasia2] = useState({name : "", crest : ""})
    const [copa2, setcopa2] = useState({name : "", crest : ""})
    const [laliga2, setlaliga2] = useState({name : "", crest : ""})
    var [serial2, setserial2]= useState({name : "", crest : ""})
    var [bundesliga2, setbundesliga2]= useState({name : "", crest : ""})
    var [ligue2, setligue2]= useState({name : "", crest : ""})
    var [fa_cup2, setfa_cup2]= useState({name : "", crest : ""})
    var [copadel2, setcopadel2]= useState({name : "", crest : ""})
    var [mls2, setmls2]= useState({name : "", crest : ""})
    var [saudi2, setsaudi2]= useState({name : "", crest : ""})

    var more
    var more1
    var more2
    const [ret, setRet] = useState(
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )

 async function previous(){
    try{
        const result1 =await fetch("https://sportsulp.onrender.com/live_matches"); 
        const main1 = await result1.json()
        console.log("edward")
        console.log(main1)


        main1.map((item)=>{
    
          if(item.league_id == 28){
              wc.push(item)
          }
          if(item.league_id == 3){
              cl.push(item)
          }
          if(item.league_id == 4){
              eup.push(item)
          }
          if(item.league_id == 683){
              con.push(item)
          }
          if(item.league_id == 29){
              afcon.push(item)
              console.log(afcon)
              console.log(item)
          }
          if(item.league_id == 1){
              euros.push(item)
          }
          if(item.league_id == 17){
              copa.push(item)
          }
          if(item.league_id == 302){
              laliga.push(item)
          }
          if(item.league_id == 168){
              ligue1.push(item)
          }
          if(item.league_id == 152){
              epl.push(item)
          }
          if(item.league_id == 347){
              asia.push(item)
              console.log(item)
  
          }
          if(item.league_id == 207){
              euros.push(item)
          }

  
          if(item.league_id == 207){
              seria_a.push(item)
              
              console.log(item)
          }
  
          if(item.league_id == 175){
              bundeslisga.push(item)
          }
          if(item.league_id == 300){
              copadel.push(item)
          }
          if(item.league_id == 146){
              fa_cup.push(item)
          }
          if(item.league_id == 332){
              mls.push(item)
          }
          if(item.league_id == 278){
              sui.push(item)
          }
  
  })
  

  if(epl.length > 0){
        
    setepl2({name     : "Premier League",crest : ( <img src ="https://apiv3.apifootball.com/badges/logo_leagues/152_premier-league.png" style = {{height : "40px", width : "40px"}}></img>)})
    setpl(epl.map((item)=>{
      
        return(
                                            <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                                
                            <div className="indi_matches">

                            <div className="teams_names">
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                            </div>
                            <div className="teams_scores">
                                <h4>{item.match_hometeam_score}</h4>
                                <h4>{item.match_awayteam_score}</h4>
                            </div>

                    <div className="time_and_love">
                                    <h6 style={{color : "warning"}}>         {item.match_status}'
                                </h6>
                               <p className="text-warning">{item.match_time} || {item.match_date}</p>
                            
                            
                    </div>
                    </div>
                    </Link>
        )
         } ))

}
if(others.length > 0){


    setothers2({name     : "Other Leagues", crest : ( <img  src ={require("../images/main_logo.png")}  style = {{height : "40px", width : "40px"}}></img>)})
  setothers(others.map((item)=>{
    
      return(
                                          <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                              
                          <div className="indi_matches">

                          <div className="teams_names">
 <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                          </div>
                          <div className="teams_scores">
                              <h4>{item.match_hometeam_score}</h4>
                              <h4>{item.match_awayteam_score}</h4>
                          </div>

                  <div className="time_and_love">
                                  <h6 style={{color : "warning"}}>           {item.match_status}'
                              </h6>
                           <p className="text-warning">{item.match_time} || {item.match_date}</p>
                          
                          
                  </div>
                  </div>
                  </Link>
      )
       } ))

}

        
    if(wc.length > 0){


        setwc2({name     : "World Cup", crest : ( <img src ="https://apiv3.apifootball.com/badges/logo_leagues/28_world-cup.png"style = {{height : "40px", width : "40px"}}></img>)})
      setwc(wc.map((item)=>{
        
          return(
                                              <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                                  
                              <div className="indi_matches">

                              <div className="teams_names">
                              <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                              </div>
                              <div className="teams_scores">
                                  <h4>{item.match_hometeam_score}</h4>
                                  <h4>{item.match_awayteam_score}</h4>
                              </div>

                      <div className="time_and_love">
                                      <h6 style={{color : "warning"}}>           {item.match_status}'
                                  </h6>
                               <p className="text-warning">{item.match_time} || {item.match_date}</p>
                              
                              
                      </div>
                      </div>
                      </Link>
          )
           } ))

  }

  
  if(cl.length > 0){
  
      setcl2({name     : "UEFA Champions League", crest : (  <img src =     "https://apiv3.apifootball.com/badges/logo_leagues/3_uefa-champions-league.png"style = {{height : "40px", width : "40px"}}></img>)})
  setcl(cl.map((item)=>{
    
      return(
                                          <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                              
                          <div className="indi_matches">

                          <div className="teams_names">
 <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                          </div>
                          <div className="teams_scores">
                              <h4>{item.match_hometeam_score}</h4>
                              <h4>{item.match_awayteam_score}</h4>
                          </div>

                  <div className="time_and_love">
                                  <h6 style={{color : "warning"}}>       {item.match_status}'
                              </h6>
                             <p className="text-warning">{item.match_time} || {item.match_date}</p>
                          
                          
                  </div>
                  </div>
                  </Link>
      )
       } ))

}



if(eup.length > 0){
      seteup2({name     : "UEFA EUROPEAN LEAGUE", crest : (    <img src=    "https://apiv3.apifootball.com/badges/logo_leagues/3_uefa-champions-league.png"style = {{height : "40px", width : "40px"}}></img>)})
seteup(eup.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                          <p className="text-warning">{item.match_time}  ||  {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(con.length > 0){
         setcon2({name     : "UEFA Conference League", crest : (<img src = "https://apiv3.apifootball.com/badges/logo_leagues/683_uefa-europa-conference-league.png"style = {{height : "40px", width : "40px"}}></img>)})
          setcon(con.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                          <p className="text-warning">{item.match_time}  ||  {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}



if(afcon.length > 0){

  setafcon2( {name     : "African Cup of Nations",crest : (<img src=  "https://apiv3.apifootball.com/badges/logo_leagues/29_africa-cup-of-nations-qualification.png" style = {{height : "40px", width : "40px"}}></img>)})
setafcon(afcon.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                <p className="text-warning">{item.match_time}  ||  {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}



if(euros.length > 0){

         seteuros2({name     : "UEFA EUREOPEAN CHAMPIONSHIP", crest : (   "https://apiv3.apifootball.com/badges/logo_leagues/683_uefa-europa-conference-league.png")})
seteuros(euros.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                           <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}






if(copa.length > 0){

         setcopa2({name     : "COPA AMERICA", crest : (  <img src =   "https://apiv3.apifootball.com/badges/logo_leagues/17_copa-america.png"style = {{height : "40px", width : "40px"}}></img>)})
  setcopa(copa.map((item)=>{ 

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
<p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(asia.length > 0){

          setasia2({name     : "AFC ASIAN CUP", crest : (   <img src= "https://apiv3.apifootball.com/badges/logo_leagues/347_afc-asian-cup.png"style = {{height : "40px", width : "40px"}}></img>)})
setasia(asia.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                   <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}

if(laliga.length > 0){

         setlaliga2({name     : "La Liga", crest : (   <img src= "https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png"style = {{height : "40px", width : "40px"}}></img>)})
setlaliga(laliga.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                   <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(seria_a.length > 0){

      setserial2({name     : "SERIA A",crest : ( <img src = "https://apiv3.apifootball.com/badges/logo_leagues/207_serie-a.png"style = {{height : "40px", width : "40px"}}></img>)})
  setseria(seria_a.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                         <p className="text-warning">{item.match_time} || {item.match_date}</p>  
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}

if(bundeslisga.length > 0){

      setbundesliga2({name     : "Bundesliga", crest : (<img src = "https://apiv3.apifootball.com/badges/logo_leagues/175_bundesliga.png"style = {{height : "40px", width : "40px"}}></img>)})
setbundesliga(bundeslisga.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                       <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(ligue1.length > 0){

      setligue2({name     : "Ligue 1", crest : ( <img src = "https://apiv3.apifootball.com/badges/logo_leagues/168_ligue-1.png"style = {{height : "40px", width : "40px"}}></img>)})
setligue(ligue1.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                         <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(copadel.length > 0){

      setcopadel2({name     : "Copa del Ray", crest : (<img src =" https://apiv3.apifootball.com/badges/logo_leagues/300_copa-del-rey.png"style = {{height : "40px", width : "40px"}}></img>)})
setcopadel(copadel.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>
                          {item.match_status}'
                          </h6>
<p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(fa_cup.length > 0){

setfa_cup2({name     : "England FA Cup", crest : (<img src = "https://apiv3.apifootball.com/badges/logo_leagues/146_fa-cup.png"style = {{height : "40px", width : "40px"}}></img>)})
setfa(fa_cup.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                      <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(mls.length > 0){

      setmls2({name     : "Major League Soccer", crest : (<img src=  "https://apiv3.apifootball.com/badges/logo_leagues/332_mls.png"style = {{height : "40px", width : "40px"}}></img>)})
setmls(mls.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                                <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                       <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}


if(sui.length > 0){

          setsaudi2({name     : "Saudi Pro League", crest : (<img src="https://apiv3.apifootball.com/badges/logo_leagues/278_saudi-league.png"style = {{height : "40px", width : "40px"}}></img>)})
setsaudi(sui.map((item)=>{

  return(
                                      <Link to={"/personal"} state={item} style={{textDecoration : "none"}}>
                                                          
                      <div className="indi_matches">

                      <div className="teams_names">
                      <div style={{display : "flex", alignItems : "center"}}><img src={item.team_home_badge} style={{width : "20px", height : "20px"}}></img> <h4>{item.match_hometeam_name}</h4></div>
                     <div style={{display : "flex", alignItems : "center"}}><img src={item.team_away_badge}style={{width : "20px", height : "20px"}}></img> <h4>{item.match_awayteam_name}</h4></div>
                      </div>
                      <div className="teams_scores">
                          <h4>{item.match_hometeam_score}</h4>
                          <h4>{item.match_awayteam_score}</h4>
                      </div>

              <div className="time_and_love">
                              <h6 style={{color : "warning"}}>   {item.match_status}'
                          </h6>
                    <p className="text-warning">{item.match_time} || {item.match_date}</p>
                      
                      
              </div>
              </div>
              </Link>
  )
   } ))

}

  
  
    }
    catch (error){

    }

    setRet(
      <>
          <div>
<div style = {{display : "flex"}}>{wc2.crest} <h3 className = "text-light"> {wc2.name} </h3>
</div>
{wc1}
</div>


<div>
<div style = {{display : "flex"}}>{cl2.crest} <h3 className = "text-light"> {cl2.name} </h3>
</div>
{cl1}



</div>

<div>
<div style = {{display : "flex"}}>{eup2.crest} <h3 className = "text-light"> {eup2.name} </h3>
</div>
{eup1}


</div>



<div>
<div style = {{display : "flex"}}>{con2.crest} <h3 className = "text-light"> {con2.name} </h3>
</div>
{con1}

</div>


<div>
<div style = {{display : "flex"}}>{afcon2.crest} <h3 className = "text-light"> {afcon2.name} </h3>
</div>
{afcon1}



<div>
<div style = {{display : "flex"}}>{euros2.crest} <h3 className = "text-light"> {euros2.name} </h3>
</div>
{euros1}



<div>
<div style = {{display : "flex"}}>{copa2.crest} <h3 className = "text-light"> {copa2.name} </h3>
</div>
{copa1}

</div>

<div>
<div style = {{display : "flex"}}>{asia2.crest} <h3 className = "text-light"> {asia2.name} </h3>
</div>
{asia1}

</div>
<div>
<div style = {{display : "flex"}}>{epl2.crest} <h3 className = "text-light"> {epl2.name} </h3>
</div>
{epl1}
</div>

<div>
<div style = {{display : "flex"}}>{laliga2.crest} <h3 className = "text-light"> {laliga2.name} </h3>
</div>
{laliga1}

</div>
<div>
<div style = {{display : "flex"}}>{serial2.crest} <h3 className = "text-light"> {serial2.name} </h3>
</div>
{seria1}
</div>

<div>
<div style = {{display : "flex"}}>{bundesliga2.crest} <h3 className = "text-light"> {bundesliga2.name} </h3>
</div>
{bundeslig1}

</div>
<div>
<div style = {{display : "flex"}}>{ligue2.crest} <h3 className = "text-light"> {ligue2.name} </h3>
</div>
{ligue}

</div>
<div>
<div style = {{display : "flex"}}>{fa_cup2.crest} <h3 className = "text-light"> {fa_cup2.name} </h3>
</div>
{fa_cup1}

</div>
<div>
<div style = {{display : "flex"}}>{copadel2.crest} <h3 className = "text-light"> {copadel2.name} </h3>
</div>
{copadel1}

</div>
<div>
<div style = {{display : "flex"}}>{mls2.crest} <h3 className = "text-light"> {mls2.name} </h3>
</div>
{mls1}

</div>
 <div>
<div style = {{display : "flex"}}>{saudi2.crest} <h3 className = "text-light"> {saudi2.name} </h3>
</div>
{saudi}

</div>


 <div>
<div style = {{display : "flex"}}>{others2.crest} <h3 className = "text-light"> {others2.name} </h3>

</div>
{others1}
</div>

</div>


</div>

      </>
    )
   }



previous()

    return(
        <body style={{}}>
            <Nav/>
            
            <div className="matches_date">
            <input  type="date" hidden id="date_input"></input>
                <Link className="btn-dark btn" id = "call"  >📅</Link>
                <Link className="btn btn-outline-secondary" to={"/yesterday"}>Yesterday</Link>
                <Link className="btn btn-outline-warning" to = {"/"} >TODAY </Link>
                <Link className="btn btn-outline-info" to={'/tomorrow'} >Tomorrow </Link>
                <Link className="btn btn-success" to = {'/live'}>LIVE</Link>

            </div>
           
      <div className="list_of_matches" style={{maxHeight : window.innerHeight - 200, overflowY : "auto", textDecoration : "none"}}>
  
      {ret}

</div>



        </body>
    )

}

export default Live
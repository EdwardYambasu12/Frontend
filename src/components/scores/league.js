import React, { useState } from 'react'
import Nav from '../nav_bar/nav'
import { Link, useLocation } from 'react-router-dom'


export default function Leagues() {


    let d = new Date()




const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+30)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
console.log(tomorrow_date)


let num = 0




    const [games, setGames] = useState("")
    const [Teams, setTeams] = useState("")
    const [head, setHead]= useState()
    const {state} = useLocation()
    console.log(state)
    async function fetcher(){
        try{
        const result = await fetch("https://apiv3.apifootball.com/?action=get_events&league_id="+state.league_id+"&from="+today_date+"&to="+tomorrow_date+"&APIkey=d1872d2c1145e86d9b321ed826416316b9813191e72cde2cb6b3b16206fd4aa9")
        const json = await result.json()
        console.log(json)
        
        const result1 = await fetch("https://apiv3.apifootball.com/?action=get_teams&league_id="+state.league_id+"&APIkey=d1872d2c1145e86d9b321ed826416316b9813191e72cde2cb6b3b16206fd4aa9")
        const json1 = await result1.json()
        console.log(json1)

        setTeams(json1.map((item)=>{
            return(
                <div className='btn btn-warning' style={{width : "100%", marginTop : "2%"}}>
                        {item.team_name}
                        
                </div>
            )
        }))

        setHead(
            json.map((item)=>{

                return(
                
                    <div className="indi_matches">

                    <div className="teams_names">
                    <h4>{item.match_hometeam_name}</h4>
                    <h4>{item.match_awayteam_name}</h4>
                    </div>
                    <div className="teams_scores">
                        <h4>{item.match_hometeam_score}</h4>
                        <h4>{item.match_awayteam_score}</h4>
                    </div>
                    
                    <div className="time_and_love">
                                    <h6 style={{color : "white"}}>
                                    {item.match_status}
                                    </h6>
                                    <p className="text-warning">{item.match_date}</p>
                                
                                
                        </div>
                    </div>
                )
            })
        )


    }

   
    catch(error){
        console.log("error")
    }}

    fetcher()
  return (
    
    <body>
        <Nav></Nav>
        
        <Link className="btn btn-danger" to={"/"}>return home</Link>
        <div style={{textAlign : "center"}}>
            <img alt='League Image' src = {state.league_logo}></img>
            <h1>League Name</h1>
            <h4>Country</h4>
            <hr></hr>
            <h2>Available Matches in 30 days</h2>
            {head}
            <h2>Available Teams</h2>
            {Teams}
            </div>
<footer></footer>
        </body>
    )
}

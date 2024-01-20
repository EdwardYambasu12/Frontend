import React, { useEffect, useState } from "react";
import Nav from "../nav_bar/nav";
import { Link, useLocation } from "react-router-dom";
import "./personal.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import Line_up from "./lineup";
import Footer from "../scores/footer/footer";

function Personal(props){

    

    const [needed, setNeeded] = useState()
    const [na, setNa] = useState("ed")
    const {state} = useLocation();
    const [popout, setPopout] = useState("")

    const [item, setItem]= useState(state)
    const [meant, setMeant] = useState("money")

    async function fetcher(){
        try{
        let json = await    fetch("https://apiv3.apifootball.com/?action=get_events&match_id="+state.match_id+"&APIkey=d1872d2c1145e86d9b321ed826416316b9813191e72cde2cb6b3b16206fd4aa9")
        let main = await json.json()
       setItem(main[0])}
       catch(error){
        console.log("there is an error updating")
       }
       setTimeout(fetcher, 10000) 
    }
 
fetcher()
    //INFO
  

    const [lower, setLower] = useState(<Info item={item}/>)



    function information(){
        setLower(<Info item={item}/>)
    }
    
    function match_summary(){
        setLower(<Match_info item={item}/>)
    }

    function statistics(){
        setLower(<Stats item={item}/>)
    }
    function Line_ups(){
        setLower(<Lineup item={item}/>)
    }
    function tables(){
        setLower(<Tables item={item}/>)
    }
    function h2h(){
        setLower(<H2H item = {item}/>)
    }
    function news(){
        setLower(<News/>)
    }
    function live(){
        setLower(<Live item = {item}/>)
    }

/*
    if (holder == "stats"){
        <Stats/>
    }
    else if(holder == "news"){
        <News_game/>
    }
    else if(holder == "lineup"){
        <Line_up/>
    }
    else if(holder == "table"){
        <Table/>
    }
    else if(holder == "missing"){
        <Missing_player/>
    }
    else{
        
    }
*/



    return(
        <body>
        <>
        <Nav/>
       
       <div className="top_class">
        <Link className="btn btn-danger" to={"/"}>return home</Link>
        <hr style={{backgroundColor : "white", color : "white"}}></hr>
        <div className="main_row">
            <div style={{width : "40%"}}>
                <img src = {item.team_home_badge} className="team_logos"></img>
                <h4  className="text-warning">{item.match_hometeam_name}</h4>
            </div>

            <div style={{display : "flex", justifyContent : "space-evenly", width : "20%"}}>
                <h1 className="text-light">{item.match_hometeam_score}</h1>
                <h1 className="text-warning" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-light">{item.match_awayteam_score}</h1>
            </div>
            {popout}

            <div id = "awaya" style={{width : "40%"}}>
                <img src = {item.team_away_badge} className="team_logos"></img>
                <h4 >{item.match_awayteam_name}</h4>
            </div>


        </div>

           
        <div>
                <h2 className="text-center text-light">{item.match_status}'</h2>
              </div>


      
        </div>

        <div className="short_nav">
            <button className="btn" onClick={()=>information()}>Info</button>
            <button className="btn" onClick={()=>match_summary()}>Summary</button>
            <button className="btn" onClick={()=>live()}>Live Commentary</button>
            <button className="btn" onClick={()=>statistics()}>Stats</button>
            <button className="btn" onClick={()=>Line_ups()}>Line_ups</button>
            <button className="btn"onClick={()=>tables()}>Table</button>
            <button className="btn"onClick={()=>h2h()}>H2H</button>
            <button className="btn" onClick={()=>news()}>News</button>
        </div>

        {lower}
        <Footer></Footer>
        </>
        </body>
    )
}



function Info(props){



    const item = props.item
    console.log(props.item)

    return(

       
  
          <div className="info_div">
        <>
            <h1>MATCH INFO</h1>

          
            <h3>Referees: </h3>
            <div className="ref_box">
           <h2>{item.match_referee}</h2>
     

            </div>
            <hr></hr>
            <br></br>
         
            <h3>Venue:</h3>
            <h1 className="text-warning">{item.match_stadium}</h1>

            <h4>League:{item.league_name}</h4>
            <h4>Country : {item.country_name}</h4>
        </>
        </div>

    )
}

function Match_info(props){

  








    const item = props.item


      let goals_map = item.goalscorer.map((item)=>{

        if(item.home_scorer === ""){

            if (item.info == ""){

            return(
                
                
                <div id="main">
                    <h6>  {item.away_scorer} {item.time}'⚽ | ({item.away_assist}) </h6>

                </div>
            )
        }
        else if(item.info =="Penalty"){
            
            return(
            
                <div id="main">
                    <h4>    {item.away_scorer} {item.time}'⚽  </h4>
                    <h5 id = "pen">pen</h5>
                </div>)
        }


    }
        
        else{
            if(item.away_scorer === ""){
           
                if (item.info == ""){
    
                return(
                    
                    
                    <div id="main-left">
                        <h6>  {item.home_scorer} {item.time}'⚽ | ({item.home_assist} )</h6>
    
                    </div>
                )
            }
            else if(item.info =="Penalty"){
                
                return(
                
                    <div id="main-left">
                        <h4>    {item.home_scorer} {item.time}'⚽  </h4>
                        <h5 id = "pen">pen</h5>
                    </div>)
            }
    
        }
    }
      })




      let bookings = item.cards.map((item)=>{

        let cards
        if(item.card == "yellow card"){
            cards = "🟨"
        }
        else{
            cards  = "🟥"
        }

        if(item.home_fault === ""){

          

            return(
                
                
                <div id="main">
                    <h6>  {item.away_fault} {item.time}{cards}</h6>

                </div>
            )
     }
    

  
        else{
            return(
                
                
                <div id="main-left">
                    <h6>  {item.home_fault} {item.time}{cards}</h6>

                </div>
            )
    }
      })




      let subs_home = item.substitutions.home.map((item)=>{
            return(
                <div id="main-left">
                <p>{item.substitution} {item.time}'</p>
                </div>
            )
      })
      let subs_away = item.substitutions.away.map((item)=>{
        return(
            <div id="main">
            <p>{item.substitution} {item.time}'</p>
            </div>
        )
  })






      return(

<body className="container" style={{height : "500px", overflowY : "auto"}}>
    <h4 className="text-center text-secondary">Goals</h4>
        {goals_map}
        <h4 className="text-center text-secondary">bookings</h4>
        {bookings}

        <h4 className="text-center text-secondary">substitutions</h4>
        
            {subs_home}
        
        
            {subs_away}
        
 </body>

      )




}



function Tables(props){


    
    const [map, setMap] = useState()
    const [main, setMain] = useState(<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>)
    const [group, setGroup] = useState()
    let pointer = props.item
    async function fetcher(){
        try{
        const item = await fetch("https://sportsulp.onrender.com/standings/"+pointer.league_id)
        const des = await item.json()
       console.log(des)
       
    
    
       setMap(des.map((item)=>{
            if (item.stage_name == "Current"){
                setMain()
                console.log(item.overall_league_played, item.overall_league_points)
                return(
                    <tr>
                       
                    <td>{item.overall_league_position}</td>
                    <td>{item.team_name}</td>
                    <td>{item.overall_league_payed}</td>
                    <td>{item.overall_league_GF - item.overall_league_GA}</td>
                    <td>{item.overall_league_PTS}</td>
                </tr>
                )
           
            
            }

            else if (item.stage_name == pointer.stage_name){
                setMap("working on Matches with Group Stage")

            }
            else{
                setMain("Standings not Found")
                setMap("Standings not found")
            }
        }))
        }
        catch(error){
            setMain("Can't Load Tabel due to poor network Connection or League does not contain Table")
        }


    }
fetcher()

    return(
        <body style={{height : "500px", overflowY : "auto"}}>
            <table className="table">
                <caption></caption>
                <tr >
                    <th>POS</th>
                    <th>TEAMS</th>
                    <th>PLD</th>
                    <th>GD</th>
                    <th>PTS</th>
                </tr>

                    {main}
                    {map}
                   
                
            </table>
             <h4 className="text-warning text-center">{group}</h4>
        </body>
    )
    
}

function Lineup(props){
    const item = props.item
    const pointer = props.item

    
   let  first =      item.lineup.home.starting_lineups.map((item)=>{
   
    if(pointer.lineup.home.starting_lineups.length == 0){
        return(
            <>Match Lineups not Available</>
        )
    }
    else{

        return(
         
            <Link to={"/player"} style={{textDecoration : "none"}}state={item.player_key}>
            <div>
                 <h4>{item.lineup_player}</h4>    
                 <h6>{item.lineup_number}</h6>  
                 <hr></hr>
         
             </div>
             </Link>
        )
    }
      })

 let second =     item.lineup.away.starting_lineups.map((item)=>{

    if(pointer.lineup.away.starting_lineups.length == 0){
        return(
            <>Match Lineups not Available</>
        )
    }
    else{

        return(
         <Link to={"/player"} style={{textDecoration : "none"}}state={item.player_key}>
           <div>
                <h4>{item.lineup_player}</h4>    
                <h6>{item.lineup_number}</h6>  
                <hr></hr>
        
            </div>
            </Link>
        )
    }
})


let first_subs = item.lineup.home.substitutes.map((item)=>{
    if(pointer.lineup.home.starting_lineups.length == 0){
        return(
            <>Match Lineups not Available</>
        )
    }
    else{

        return(
         
            <Link to={"/player"} style={{textDecoration : "none"}} state={item.player_key}>
            <div>
                 <h4>{item.lineup_player}</h4>    
                 <h6>{item.lineup_number}</h6>  
                 <hr></hr>
         
             </div>
             </Link>
        )
    }
})


let second_subs = item.lineup.away.substitutes.map((item)=>{
    if(pointer.lineup.home.starting_lineups.length == 0){
        return(
            <>Match Lineups not Available</>
        )
    }
    else{

        return(
         
            <Link to={"/player"}  style={{textDecoration : "none"}}state={item.player_key}>
            <div>
                 <h4>{item.lineup_player}</h4>    
                 <h6>{item.lineup_number}</h6>  
                 <hr></hr>
         
             </div>
             </Link>
        )
    }
})
let coachname
if(item.lineup.home.coach.length == 0){
    coachname = ""
}
else{
    coachname = item.lineup.home.coach[0].lineup_player
}


let coachname1 = ""
if(item.lineup.away.coach.length == 0){
    coachname1 = ""
}
else{
    coachname1= item.lineup.away.coach[0].lineup_player
}
return(
    <body style={{height : "500px", overflowY : "auto"}}>
        <div className="all" style={{display : "flex", justifyContent : "space-between"}}>
        <div className="homeSlot">
        


            <h5 className="text-center text-dark" >
                {item.match_hometeam_system}
            </h5>        <Link to={"/player"} state={item.player_key} style={{textDecoration : "none"}}><h3 className=" text-warning" style={{backgroundColor :"midnightblue"}}>
                {coachname}
            </h3></Link>
            <h2 className="text-danger">Starting XI</h2>
    
            <div>
                {first}
            </div>
            <br></br>
            
            <h2  className="text-danger">substitutions</h2>
          
            <div>
                {first_subs}
            </div>
        </div>

        <div className="awaySlot">
      

            <h5 className="text-center text-warning">
            {item.match_awayteam_system}
            </h5>
            <Link to={"/player"}state={item.player_key} style={{textDecoration : "none"}}><h3 className=" text-warning" style={{backgroundColor :"midnightblue"}}>
                {coachname1}
            </h3></Link>
            <h2  className="text-danger">Starting XI</h2>
          
            <div>
                {second}
            </div>
            <br></br>
            <h2  className="text-danger">substitutions</h2>
     
            <div>
                {second_subs}
            </div>
        </div>





        </div>

    </body>
)



}

function Stats(props){
  const  pointer = props.item

   let maped =  pointer.statistics.map((item)=>{
        let home = Number(item.home)
        let away = Number(item.away)
        if(Number(item.home) > Number(item.away)){
            let percent = away+home
            console.log(percent)
            let inner = away*100/percent
            let outcome = 100-inner
            let main = outcome+"%"
            console.log("bigger")
            console.log(main)
            return(
                <>
                 <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold"}}>
                <div class="div-inner" style={{width : main, height:"15px", backgroundColor : "midnightblue"}}>
        
                </div>
            </div>
            </>
            )
        }
        else if(Number(item.away) > Number(item.home)){
            let percent = away+home
            console.log(percent)
            let inner = home*100/percent
         
            let main = inner+"%"
            console.log("bigger")
            console.log(main)
            return(
                <>
                 <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold"}}>
                <div class="div-inner" style={{width : main, height:"15px", backgroundColor : "midnightblue"}}>
        
                </div>
            </div>
            </>
            )
        }
        else if(item.type == "Ball Possession"){
            return(
                <>
                <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold"}}>
                <div class="div-inner" style={{width : item.home, height:"15px", backgroundColor : "midnightblue"}}>
        
                </div>
            </div>
            </>
            )
        }
        else{
            console.log('equal')
            return(
                <>
                      <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>

              
                <div style={{width : "100%", height : "15px", backgroundColor : "gold"}}>
                <div class="div-inner" style={{width : "50%", height:"15px", backgroundColor : "midnightblue"}}>
        
                </div>
            </div>
                </>
            )
        }
    })

    return(
        <body style={{height : "500px", overflowY : "auto"}}>
                <h3 style={{textAlign : "center"}}>Stats</h3>
                <hr></hr>
                {maped}
        </body>
    )

}

function H2H(props){
    const pointer = props.item
    const [head, setHead] = useState()
    const [home, setHome] = useState()
    const [away, setAway]= useState()
    async function fetcher(){
        try{
        const result = await fetch("https://sportsulp.onrender.com/h2h/"+pointer.match_hometeam_id+"/"+pointer.match_awayteam_id)
        const json = await result.json()
        console.log(json)



        setHead(
            json.firstTeam_VS_secondTeam.map((item)=>{
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



        setHome(
            json.firstTeam_lastResults.map((item)=>{
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

        setAway(
            json.secondTeam_lastResults.map((item)=>{
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
        )}
        catch(error){
            console.log("error")
        }
    }

   
    fetcher()

    return(
        <body style={{height : "500px", overflowY : "auto"}}>
            <h3>HEAD TO HEAD RECORD</h3>
            <hr></hr>
            {head}

            <h3>HOME TEAM LAST 10 MATCHES</h3>
            {home}
            <h3>AWAY TEAM LAST 10 MATCHES</h3>
            {away}
        </body>
    )
}
function News(){
    return(
        <>This system is not available now</>
    )
}
function Live(props){
const item = props.item
console.log(props.item.match_id)
const [ret, setRet] = useState(<Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
    
  >
    <CircularProgress color="inherit" />
  </Backdrop>)
    async function fetcher(){
        try {
            let result = await fetch("https://sportsulp.onrender.com/live_comments/d")
            let json = await result.json()
            console.log(json)
            const main_guy = json[props.item.match_id]
            let reversed = main_guy.live_comments.reverse()


            if(true){
                console.log("reading access")
               
                setRet(
                   reversed.map((item)=>{
                        return(
                            <>
                                <div style={{display : "flex", justifyContent : "space-between", alignItems : "center"}}>
                                    <div>
                                        <h5>{item.text}</h5>
                                        
                                    </div>
                                    <div>
                                        <h6 className="text-danger">{item.time}</h6>
                                        
                                    </div>
                                </div>
                                <hr></hr>
                            </>
                        )
                    })
                )
            }
            else{
             
                setRet(
                        <>
                        <h1>Match isn't Live</h1>
                    </>
                )
            }

        } catch (error) {
            
        }
setTimeout(fetcher, 10000)
    }
fetcher()
    return(
        <body style={{overflowY : "auto"}}>
            <h3 className="text-center">Live Commentary</h3>
            <hr></hr>
            {ret}
        </body>
    )
}

 
export default Personal
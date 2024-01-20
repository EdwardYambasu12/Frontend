import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../nav_bar/nav'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import Footer from '../scores/footer/footer';


export default function Players() {


    const {state} = useLocation()
    const [inner, setInner] = useState(<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
      
    >
      <CircularProgress color="inherit" />
    </Backdrop>)
    console.log(state)

    async function fetcher(state){

        try{
            const result = await    fetch("https://sportsulp.onrender.com/players/"+state)
            const json = await result.json()
            console.log(json)
            setInner(
              <div  style={{textAlign : "center"}}>
              <h2 className='text-center'>Player Stats</h2>
              <hr></hr>
      
          <img style={{height : "200px", width : "50%", marginLeft : "25%", marginRight : "25%"} } src = {json[0].player_image} alt = "player photo" loading='lazy'></img>
          <h5 className='text-center text-warning'>Personal Information</h5>
 
          <h6>Player Name : {json[0].player_name}</h6>
          <h6>Player Nationality : {json[0].player_country}</h6>
          <h6>Date of Birth : {json[0].player_birthdate}</h6>
         
          <h6>Age : {json[0].player_age}</h6>
          <h6>Club : {json[0].team_name}</h6>
          <hr>
          </hr>
      
          <h2 className='text-center text-warning'>Seasonal Stats</h2>
          <h6>Goals : {json[0].player_goals}</h6>
          <h6>Assist : {json[0].player_assists}</h6>
          <h6>penalties : {json[0].player_pen_scored}</h6>
          <h6>Yellow Cards : {json[0].player_yellow_cards}</h6>
          <h6>Red Cards : {json[0].player_red_cards}</h6>
          <h6>Saves : {json[0].player_saves}</h6>
          <h6>Games Played : {json[0].player_match_played}</h6>
          <h6>Games Minutes : {json[0].player_minutes}</h6>
          </div>
            )}
            catch(error){
              setInner(
                <h3>Check Network Connection</h3>
              )
            }
    }

    fetcher(state)

  return (
    
    <body>
        <Nav></Nav>
        <Link className="btn btn-danger text-left"  to={"/"}>return home</Link>
      {inner}
      <Footer></Footer>
      
    </body>
  )
}

import React, { useEffect, useState } from "react";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
function Leagues(){
    var more
    const [ret, setRet] = useState(<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>)
 
useEffect(()=>{
   async function fetcher(){

    try {
        const result =await fetch("https://sportsulp.onrender.com/competitions")
        const main = await result.json()
        console.log(main)
 
   let more = main.map((item)=>{
  
        return(
            <Link to={"/league"} state={item}>
                <button className="btn bg-warning btn-outline-dark "  style={{width : '100%'}}>{item.league_name}</button>
            </Link>
           
        )
    })
   setRet(more)
   
   }
        
   catch (error) {
    console.log(error)
    }}

    
   fetcher()

}, [])

    return(
        <>
            
            {ret}
        </>
    )
    
}

export default Leagues
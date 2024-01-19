import React, { useEffect, useState } from 'react'
import Nav from "../nav_bar/nav";
import { Link, useLocation } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Minor() {
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
  
    let  more = main.map((item)=>{
   
         return(
             <Link to={"/league"} state={item}>
                 <button className="btn bg-warning btn-outline-dark "  style={{width : '100%'}}>{item.league_name}</button>
                 <hr></hr>
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


  return (
    <body className='bg-dark text-light'>
        <Nav/>
        <Link className="btn btn-danger text-left"  to={"/"}>return home</Link>
        <h2 className='text-center text-warning'>List Of Leagues</h2>
        <div style = {{height : window.innerHeight - 200, overflowY : "auto"}}>
        {ret}
        </div>
    </body>
  )
}

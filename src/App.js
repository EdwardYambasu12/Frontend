import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "./components/home/home"
import Personal from "./components/personal/personal"
import "./bootstrap.min.css"
import Players from "./components/personal/player"
import Leagues from "./components/scores/league"
import Minor from "./components/scores/minor"
import Yesterday from "./components/scores/yesterday"
import Tomorrows from "./components/scores/tomorrow"
import Live from "./components/scores/live"
import Modern from "./components/nav_bar/moder"
import Footer from "./components/scores/footer/footer"

function App(){

  return(

    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/personal" element = {<Personal/>}></Route>
        <Route path="/player" element = {<Players/>}></Route>
        <Route path="/league" element = {<Leagues/>}></Route>
        <Route path="/minor" element={<Minor/>}></Route>
        <Route path="/yesterday" element={<Yesterday/>}></Route>
        <Route path="/tomorrow" element={<Tomorrows/>}></Route>
        <Route path="/live" element={<Live/>}></Route>
        <Route path="/modern" element={<Modern/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </Router>

  )
}


export default App
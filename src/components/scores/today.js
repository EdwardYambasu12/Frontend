import React, { useState } from 'react'

export default function Today() {
    var more
    var more1
    var more2
    const [ret, setRet] = useState()
 

   async function fetcher(){
   
    //Today
    const result1 =await fetch("https://sportsulp.onrender.com/matches"); 
    const main1 = await result1.json()
    console.log(main1)
 
    more1= main1.map((item)=>{
        let status

        if (item.match_status == "Finished"){
            status = "Ft"
        }
       

  
        return(
          
                                        <div className="indi_matches">
                                
                                        <div className="teams_names">
                                        <h4>{item.match_hometeam_name}</h4>
                                        <h4>{item.match_awayteam_name}</h4>
                                        </div>

                                        <div className="teams_scores">
                                            <h4>match_hometeam_score</h4>
                                            <h4>match_awayteam_score</h4>
                                        </div>

                                <div className="time_and_love">
                                            <h6 style={{color : "white"}}>
                                               {status}
                                            </h6>
                                            <p className="text-warning">league name</p>
                                        
                                        
                                </div>
                            </div>

        )
    })
    
  setRet(more1)





   }
   fetcher()

  return (
    <div>{ret}</div>
  )
}

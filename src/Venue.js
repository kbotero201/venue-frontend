import React from "react"
import { Link } from "react-router-dom"


function Venue({venue}){

    return(
        
      <Link to={`/venues/${venue.id}`}>
        <div className="card" >
            
              <div className="div1">
              <img src={venue.image} alt={venue.name}/> 
              </div>

              <div className="div2">
                  <div>
                  <button className="cardbutton"> {venue.location} </button> 
                  </div>
                <h2>{venue.name}</h2>
                <p> {venue.description.slice(0,20)}... </p>
              </div>

              <div className="div3">
                <h4> {venue.name} </h4>
              </div>
        </div>
      </Link>
        
    )
}

export default Venue


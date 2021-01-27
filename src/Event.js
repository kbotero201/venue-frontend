import React from "react"
import { Link } from "react-router-dom"


function Event({event}){

    return(
        
      <Link to={`/events/${event.id}`}>
        <div className="card" >
            
              <div className="div1">
              <img src={event.image} alt={event.event_name}/> 
              </div>

              <div className="div2">
                  <div>
                  <button className="cardbutton"> {event.performer_name} </button>
                  <button className="cardbutton"> {event.event_type} </button>  
                  </div>
                <h2>{event.event_name}</h2>
                <p> {event.description.slice(0,20)}... </p>
              </div>

              <div className="div3">
                <h4> {event.venue.name} </h4>
              </div>
        </div>
      </Link>
        
    )
}


export default Event


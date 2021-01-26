import React from "react"
import { Link } from "react-router-dom"


function HomeEventCard({event}){

    return(

        <Link to={`/events/${event.id}`}>
        <div className="homecard" >
            
              <div className="div1">
              <img src={event.image} alt={event.event_name}/> 
              </div>

              <div className="div2">
                <h3>{event.event_name}</h3>
                  <div>
                  <button className="cardbutton"> {event.event_type} </button>  
                  </div>
              </div>
        </div>
      </Link>

    )
}

export default HomeEventCard
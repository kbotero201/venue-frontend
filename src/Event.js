import React from "react"
import { Link } from "react-router-dom"

//<h2><Link to={`/events/${event.id}`}>{event.event_name}</Link></h2>

function Event({event}){

    return(
        
        <div className="card" >
            
              <div className="div1">
                <img src={event.image} alt={event.event_name}/>
              </div>

              <div className="div2">
                  <div>
                  <button className="cardbutton"> {event.performer_name} </button>
                  <button className="cardbutton"> {event.event_type} </button>  
                  </div>
                <h2><Link to={`/events/${event.id}`}>{event.event_name}</Link></h2>
                <p> {event.description.slice(0,13)} </p>
              </div>

              <div className="div3">
                <h4> {event.venue.name} </h4>
              </div>
          </div>
        
        
        //<tr>
            
           // <td>
           //     <Link to={`/events/${event.id}`}>{event.event_name}</Link>
           // </td>
           // <td>{event.performer_name}</td>
           // <td>{event.event_type}</td>
           // <td>{event.description.slice(0,13)}...</td>
           // <td>{event.venue.name}</td>
       // </tr>

        
    )
}

export default Event


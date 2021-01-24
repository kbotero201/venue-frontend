import React from "react"
import { Link } from "react-router-dom"

function Event({event}){

    return(
        <tr>
            
            <td>
                <Link to={`/events/${event.id}`}>{event.event_name}</Link>
            </td>
            <td>{event.performer_name}</td>
            <td>{event.event_type}</td>
            <td>{event.description.slice(0,13)}...</td>
            <td>{event.venue.name}</td>
        </tr>
    )
}

export default Event


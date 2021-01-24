import React from "react"

function Event({event}){

    return(
        <tr>
            <td>{event.event_name}</td>
            <td>{event.performer_name}</td>
            <td>{event.event_type}</td>
            <td>{event.description.slice(0,13)}...</td>
            <td>{event.venue.name}</td>
        </tr>
    )
}

export default Event


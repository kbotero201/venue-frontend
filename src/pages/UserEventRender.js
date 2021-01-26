import React from "react"
import { Link } from "react-router-dom"

function UserEventRender({event, ticket, currentUser, setCurrentUser}){

    //const [tickets, setTicket] = useState([])

    function reloadCurrentUser(currentUser) {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`)
            .then((r) => r.json())
            .then(r => setCurrentUser(r));
    }
    //setCurrentUser
    
    function handleTickectDelete(){

        // console.log(event, "event")
        // console.log(ticket,"ticket")
        // console.log(event.id, "event id")
        // console.log(ticket.id, "ticket id")

        //http://localhost:3000/api/v1/tickets/1
        fetch(`http://localhost:3000/api/v1/tickets/${ticket.id}`, {
            method: 'DELETE'
            })
          .then (r => r.json())
          .then(data => reloadCurrentUser(currentUser))

    }

    return(
        <tr>
            <td>
                <Link to={`/events/${event.id}`}>{event.event_name}</Link>
            </td>
            <td>{event.performer_name}</td>
            <td>{event.event_type}</td>
            <td>{event.description.slice(0,13)}...</td>
            <td onClick={handleTickectDelete}> Remove </td>
        </tr>
    )
}

export default UserEventRender;
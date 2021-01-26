import React, {useEffect, useState }from "react"
import { useParams, Link } from "react-router-dom"

function EventShow({currentUser, setCurrentUser, userTickets, setUserTickets}){

    const [event, setEvent] =useState(null);
    const [isLoaded, setIsLoaded] =useState(false);

    const params =useParams();
    //console.log(params)

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/events/${params.id}`)
        .then((r) => r.json())
        .then((event) => {
            setEvent(event);
            setIsLoaded(true);
        })
    }, [params.id])


    if (!isLoaded) return <h2>Loading...</h2>

    function reloadCurrentUser(currentUser) {
        //console.log(currentUser, "user", currentUser.id
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`)
            .then((r) => r.json())
            .then(r => setCurrentUser(r));
    }

    function handleBuyButton() {
        //console.log(currentUser.id, "user Id & ", Number(params.id), "event id")
        const eventIdNum = Number(params.id)

        const data ={
            user_id: currentUser.id,
            event_id: eventIdNum,
        }

        console.log(currentUser)
        //const newCurrentUser = [...currentUser, currentUser.tickets]

        fetch(`http://localhost:3000/api/v1/tickets`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            })
            .then(r => r.json())
            .then(newTicket => reloadCurrentUser(currentUser))

        
            
    }

    console.log(event.venue.image)
    //https://via.placeholder.com/150
    
    return (
        <div>
        <h1>{event.event_name}</h1>
        <h2>Hosted By: {event.performer_name}!</h2>
        <img className="imgShow" src={event.image} alt={event.event_name}/>
        
        <br></br>
        <h3>About: {event.description}</h3>
        <h3>Location: {event.venue.name}</h3>
        <img className="imgShow" src={event.venue.image} alt={event.venue.name}/>
        <br></br>
        <Link to={`/users/${currentUser.id}`}><button onClick={handleBuyButton}>Buy Ticket!</button></Link>
        
        </div>
    )
}
export default EventShow;
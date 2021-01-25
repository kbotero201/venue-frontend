import React, {useEffect, useState }from "react"
import { useParams } from "react-router-dom"

function EventShow(){

    const [event, setEvent] =useState(null)
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

    
    return (
        <div>
        <h1>{event.event_name}</h1>
        <h2>{event.performer_name}</h2>
        </div>
    )
}
export default EventShow;
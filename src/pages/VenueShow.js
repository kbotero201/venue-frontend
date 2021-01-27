import React, {useEffect, useState }from "react"
import { useParams, Link } from "react-router-dom"
import RecSlider from "../RecSlider"


function VenueShow({events}) {

    const [showVenue, setShowVenue] =useState(null);
    const [isLoaded, setIsLoaded] =useState(false);

    const params =useParams();
    //console.log(params)

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/venues/${params.id}`)
        .then((r) => r.json())
        .then((venue) => {
            setShowVenue(venue);
            setIsLoaded(true);
        })
    }, [params.id])

    const venueEventsMapped = events.map((event) => {
        if (event.venue.id === showVenue.id){
            return <RecSlider event={event} key={event.id}/>
        }
      })


    // "id": 1,
    // "name": "Madison Square Garden",
    // "location": "manhattan",
    // "image": "../images/msg.jpg",
    // "description": "The World's Most Famous Arena",
    // "events"

    if (!isLoaded) return <h2>Loading...</h2>

    return (
        <div className="eventcard">
        <h1>{showVenue.name}</h1>
        <img className="imgShow" src={showVenue.image} alt={showVenue.name}/>
        
        <br></br>
        <p>About: {showVenue.description}</p>
        <p>Location: {showVenue.location}</p>
        <br></br>
        <h4>List of Upcoming Shows</h4>
        <div className="slider-menu2">
            {venueEventsMapped}
        </div>
       
        
        </div>
    )
    
}


export default VenueShow;
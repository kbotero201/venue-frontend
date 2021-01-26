import React from "react"
//import { useParams } from "react-router-dom"
import UserEventList from "./UserEventList"
import RecSlider from "../RecSlider"

function UserShow( {currentUser, setCurrentUser, setTickects, events}){


    const userEvents = currentUser.events
    const userTickets = currentUser.tickets

    const recEventsMapped = events.map((event) => {
        return <RecSlider event={event} key={event.id}/>
      })

    return (
        <div>
        <h1>{currentUser.name}</h1>
        <h2>Favorite: {currentUser.favorite}</h2>

        <h2>Here is the list of events you plan on going to!</h2>
        {currentUser.tickets ? <div> <UserEventList events={userEvents} tickets={userTickets} setTickects={setTickects} currentUser={currentUser} setCurrentUser={setCurrentUser}/> </div>: null}

        <h3>Recommended events for {currentUser.name}:</h3>
        
        <div className="slider-menu">
            {recEventsMapped}
        </div>


        </div>

    )
}
export default UserShow;
import React from "react"
//import { useParams } from "react-router-dom"
import UserEventList from "./UserEventList"

function UserShow( {currentUser, setCurrentUser, setTickects}){

    //console.log(currentUser.tickets)

    const userEvents = currentUser.events
    const userTickets = currentUser.tickets
    //console.log(userTicketList, "this is the usestate tickect list")
    //console.log(userTickets, "this is the userTickets")

    return (
        <div>
        <h1>{currentUser.name}</h1>
        <h2>Favorite: {currentUser.favorite}</h2>

        <h2>Here is the list of events you plan on going to!</h2>
        {currentUser.tickets ? <div> <UserEventList events={userEvents} tickets={userTickets} setTickects={setTickects} currentUser={currentUser} setCurrentUser={setCurrentUser}/> </div>: null}

        <h3>Recommended events for you:</h3>
        <div className="slider-menu">
            <div className="card">
                <img src="../images/billie.jpg" />
                <div>
                <p>Billie name</p>
                </div>
            </div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
            <div className="card">image</div>
        </div>


        </div>

    )
}
export default UserShow;
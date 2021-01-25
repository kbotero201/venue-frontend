import React, { useState }from "react"
//import { useParams } from "react-router-dom"
import UserEventList from "./UserEventList"

function UserShow( {currentUser, setCurrentUser, userTicketList, setTickects}){

    //console.log(currentUser.tickets)

    const userEvents = currentUser.events
    const userTickets = currentUser.tickets
    //console.log(userTicketList, "this is the usestate tickect list")
    //console.log(userTickets, "this is the userTickets")

    return (
        <div>
        <h1>{currentUser.name}</h1>
        <h2>{currentUser.favorite}</h2>

        {currentUser.tickets ? <div> <UserEventList events={userEvents} tickets={userTickets} setTickects={setTickects} currentUser={currentUser} setCurrentUser={setCurrentUser}/> </div>: null}
        </div>

    )
}
export default UserShow;
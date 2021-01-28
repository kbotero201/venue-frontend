import React, { useState } from "react"
import UserEventList from "./UserEventList"
import RecSlider from "../RecSlider"

function UserShow( {currentUser, setCurrentUser, setTickects, events}){


    const [updatedFav, setUpdateFav] = useState("Rock")

    const userEvents = currentUser.events
    const userTickets = currentUser.tickets

    const recEventsMapped = events.map((event) => {
        if (event.event_type.toLowerCase() === currentUser.favorite.toLowerCase()) {
            return <RecSlider event={event} key={event.id}/>
        }
      })

    function handleCategoryClick(event){
        setUpdateFav(event.target.value)
    }


    function handleUserSubmit(event){
        event.preventDefault();

        const data = {favorite: updatedFav}
        console.log(data, "this is the data")

        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then((r) => r.json())
        .then((r) => reloadCurrentUser(currentUser))
    }

    function reloadCurrentUser(currentUser) {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`)
            .then((r) => r.json())
            .then(r => setCurrentUser(r));
    }

    return (
        <div>
        <h1>{currentUser.name}</h1>
        <h2>Favorite Genre: {currentUser.favorite}</h2>

            <select onChange={handleCategoryClick} name="filter">
                    <option value="All">Change Favorite?</option>
                    <option value="All"> All </option>
                    <option value="Hip-Hop"> Hip-Hop </option>
                    <option value="Rock"> Rock </option>
                    <option value="Pop"> Pop </option>
                    <option value="Synth-Pop"> Synth-Pop </option>
                    <option value="EDM"> EDM </option>
                    <option value="Party"> Fight Ian </option>
            </select>

            <button onClick={handleUserSubmit} className="cardbutton">Update Favorite</button>

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
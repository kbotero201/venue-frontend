import React from "react";
import Event from "./Event";



function EventsList({events, setSelectedCategory, setSearhBy}) {

    const eventsMapped = events.map((event) => {
      return <Event event={event} key={event.id}/>
    })

    function handleCategoryClick(evt){
      setSelectedCategory(evt.target.value)
    }

    function handleSearchChange(evt) {
      setSearhBy(evt.target.value)
    }

    return (
          
          <div>
            <div className="search">
              <select className="round" onChange={handleCategoryClick} name="filter">
                <option value="All"> Filter </option>
                <option value="All"> All </option>
                <option value="Hip-Hop"> Hip-Hop </option>
                <option value="Rock"> Rock </option>
                <option value="Pop"> Pop </option>
                <option value="Synth-Pop"> Synth-Pop </option>
                <option value="Party"> Fight Ian </option>
              </select>
            </div>
            
            <br></br>

            <div className="search">
              <select className="round" onChange={handleSearchChange}>
                <option value="event_name">Event Name</option>
                <option value="performer_name">Performer Name</option>
                <option value="description">Description</option>
              </select>
            </div>
            
          
          {eventsMapped}
          

        </div>

    );

}

export default EventsList; 
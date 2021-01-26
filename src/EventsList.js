import React from "react";
import Event from "./Event";



function EventsList({events, setSelectedCategory}) {

    const eventsMapped = events.map((event) => {
      return <Event event={event} key={event.id}/>
    })


    function handleCategoryClick(evt){
      setSelectedCategory(evt.target.value)
    }

    return (
          
          <div>
            <div className="search">
              <select className="round" onChange={handleCategoryClick} name="filter">
                <option value="All"> Filter </option>
                <option value="Concert"> Concert </option>
                <option value="Party"> Party </option>
                <option value="Movies"> Movies </option>
              </select>
            </div>
            
          
          {eventsMapped}
          

        </div>

    );

}

export default EventsList; 
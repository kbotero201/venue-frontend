import React from "react";
import Event from "./Event";



function EventsList({events, setSelectedCategory, handleCategoryName}) {

    const eventsMapped = events.map((event) => {
      return <Event event={event} key={event.id}/>
    })


    function handleCategoryClick(evt){
      setSelectedCategory(evt.target.value)
    }

    return (
          
          <div>
            <div>
              <select onChange={handleCategoryClick} name="filter">
                <option value="All"> Filter </option>
                <option value="Concert"> Concert </option>
                <option value="Party"> Party </option>
                <option value="Movies"> Movies </option>
              </select>
            </div>
            
            <table className="table">
              <tbody>
                <tr>
                  <th>
                    
                    <h3 >Name </h3>
                  
                  </th>
                  <th>
                    <h3 >Preformer</h3>
                  </th>
                  <th>
                    <h3> Type of Event</h3>
                  </th>
                  <th>
                    <h3 >Description</h3>
                  </th>
                  <th>
                    <h3 >Location</h3>
                  </th>

                </tr>
                {eventsMapped}
               
                
              </tbody>
          </table>
        </div>

    );

}

export default EventsList; 
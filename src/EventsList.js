import React from "react";
import Event from "./Event";



function EventsList({events}) {

    console.log(events)
    const eventsMapped = events.map((event) => {
      return <Event event={event} key={event.id}/>
    })

    return (
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
                    <h3 >Amount</h3>
                  </th>

                </tr>
                {eventsMapped}
                
              </tbody>
        </table>

    );

}

export default EventsList; 
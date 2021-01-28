import React from "react";
import UserEventRender from "./UserEventRender"

function UserEventList ({events, tickets, setCurrentUser, currentUser}) {
    console.log(events, "is is the events!")
    console.log(tickets, ":ticket list")

    const eventsMapped = events.map((event) => {
        const filteredTicket = tickets.filter((ticket) => (ticket.event_id === event.id))
      return <UserEventRender event={event} key={event.id} ticket={filteredTicket[0]} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    })

    return (
        <div className="card">
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
                    <h3 >Sell</h3>
                  </th>

                </tr>
                {eventsMapped}

              </tbody>
        </table>
        </div>

    );

}

export default UserEventList; 
import React from "react";
import Event from "./Event";


function EventsList() {

    const eventsMapped = "asdf"

    return (
            <table class="table">
              <tbody>
                <tr>
                  <th>
                    <h3 >Date </h3>
                  </th>
                  <th>
                    <h3 >Description</h3>
                  </th>
                  <th>
                    <h3 >Category</h3>
                  </th>
                  <th>
                    <h3 >Amount</h3>
                  </th>

                </tr>
                <Event />
                <Event />
              </tbody>
        </table>

    );

}

export default EventsList; 
import React from "react"
import { Link } from "react-router-dom"

function RecSlider({event}){


    return(

        <Link to={`/events/${event.id}`}>
        <div className="card">
                <div className="outer">
                    <div>
                        <img src={event.image} />
                    </div>
                    <div>
                        <p><strong>{event.performer_name}</strong></p>
                    </div>
                </div>
        </div>
        </Link>
    )

}

export default RecSlider
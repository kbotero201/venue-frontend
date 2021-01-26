import React from "react"
import Event from "./Event"
import HomeEventCard from "./HomeEventCard"
import { Link } from "react-router-dom"

//src="https://www.youtube.com/embed/Vw9YytigQfg?controls=0&amp;start=21"

function Home({events}){

    const size = 3

    const eventsMapped = events.slice(0, size).map((event) => {
        return <HomeEventCard event={event} key={event.id}/>
      })

    return(
        <div>
            <div className="flex-container">
                <div className="fill">
                    <img src="../images/banner.png" />
                </div>    
            </div>


            <div className="flex-container">
                <div className="long">
                    <div className="videodiv">
                    <iframe width="495" height="290"
                    src="https://www.youtube.com/embed/Vw9YytigQfg?autoplay=1&mute=1">
                    </iframe>
                    </div>
               
                    <div>
                    <h3 > KANYE WEST - "Heartless" Live at GOV BALL </h3>
                    </div>

                    <Link to="/events/">
                    <button className="homevideodbutton"> Browse All Events > </button>  
                    </Link>
                
                </div>

                <div className="long">
                    <h4> Upcoming Events: </h4>
                        <div>
                            {eventsMapped}
                        </div>   
                </div>
            </div>

            <div className="flex-container">
                <div className="fill">
                    <img src="../images/banner.png" />
                </div>    
            </div>


                
         
        </div>

       
    )
}

export default Home 
import React from "react";
import Venue from "./Venue";
import Search from "./Search"


function VenuesList({venues, index, setIndex}) {

    
    const count = venues.length
    console.log(Math.ceil(count / 8))

    const eventsMapped = venues.slice(index, index + 6).map((venue) => {
      return <Venue venue={venue} key={venue.id}/>
    })

    function handleNextPage(evt) {
      setIndex(index + 6)
    }

    function handlePrevPage(evt){
      setIndex(index - 6)
    }

    return (
          
          <div>
            
            
            <br></br>

            <div className="flex-container">    
              <div className="searchdiv1"> 
                <Search  />
              </div>
              <div className="searchdiv2"> 
                <div className="search">
                  <select className="round" >
                   <option value="event_name">Location</option>
                   <option value="performer_name">Name</option>
                   <option value="description">Description</option>
                  </select>
                </div>
              </div>
              <div className="searchdiv3">
              {/*<div className="search">
                <select className="round"  name="filter">
                  <option value="All"> Filter </option>
                  <option value="All"> All </option>
                  <option value="Hip-Hop"> Hip-Hop </option>
                  <option value="Rock"> Rock </option>
                  <option value="Pop"> Pop </option>
                  <option value="Synth-Pop"> Synth-Pop </option>
                  <option value="EDM"> EDM </option>
                  <option value="Party"> Fight Ian </option>
                </select>
            </div>*/}
              </div>
            </div>
          
          {eventsMapped}
          
          {index != 0 ? <button className="cardbutton" onClick={handlePrevPage}> Prev Page! </button> : null}
          {index + 6 < count ? <button className="cardbutton" onClick={handleNextPage}>Next Page! </button> : null}
          
        </div>

    );

}

export default VenuesList; 
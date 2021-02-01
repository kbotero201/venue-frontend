import React from "react";
import Venue from "./Venue";
import Search from "./Search"


function VenuesList({venues, index, setIndex, search, setSearch, setVenueSearchBy}) {

    
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

    function handleSearchChange(evt) {
      setVenueSearchBy(evt.target.value)
    }

    function handleSearchChange(evt) {
      setVenueSearchBy(evt.target.value)
    }

    return (
          
          <div>
            
            
            <br></br>

            <div className="flex-container">    
              <div className="searchdiv1"> 
                <Search search={search} setSearch={setSearch} />
              </div>
              <div className="searchdiv2"> 
                <div className="search">
                  <select className="round" onChange={handleSearchChange}>
                   <option value="location">Location</option>
                   <option value="venue_name">Name</option>
                   <option value="description">Description</option>
                  </select>
                </div>
              </div>
              <div className="searchdiv3">
              </div>
            </div>
          
          {eventsMapped}
          
          {index != 0 ? <button className="cardbutton" onClick={handlePrevPage}> Prev Page! </button> : null}
          {index + 6 < count ? <button className="cardbutton" onClick={handleNextPage}>Next Page! </button> : null}
          
        </div>

    );

}

export default VenuesList; 

<div id="overL500" style="top: 117px; left: 124px; color: rgb(0, 0, 221);">x</div>
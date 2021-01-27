import React from "react";
import Event from "./Event";
import Search from "./Search"


function EventsList({events, setSelectedCategory, setSearhBy, index, setIndex, search, setSearch}) {

    
    const count = events.length
    console.log(Math.ceil(count / 8))

    const eventsMapped = events.slice(index, index + 6).map((event) => {
      return <Event event={event} key={event.id}/>
    })

    function handleCategoryClick(evt){
      setSelectedCategory(evt.target.value)
    }

    function handleSearchChange(evt) {
      setSearhBy(evt.target.value)
    }

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
                <Search search={search} setSearch={setSearch} />
              </div>
              <div className="searchdiv2"> 
                <div className="search">
                  <select className="round" onChange={handleSearchChange}>
                   <option value="event_name">Event Name</option>
                   <option value="performer_name">Performer Name</option>
                   <option value="description">Description</option>
                  </select>
                </div>
              </div>
              <div className="searchdiv3">
              <div className="search">
                <select className="round" onChange={handleCategoryClick} name="filter">
                  <option value="All"> Filter </option>
                  <option value="All"> All </option>
                  <option value="Hip-Hop"> Hip-Hop </option>
                  <option value="Rock"> Rock </option>
                  <option value="Pop"> Pop </option>
                  <option value="Synth-Pop"> Synth-Pop </option>
                  <option value="EDM"> EDM </option>
                  <option value="Party"> Fight Ian </option>
                </select>
              </div>
              </div>
            </div>
          
          {eventsMapped}
          
          {index != 0 ? <button className="cardbutton" onClick={handlePrevPage}> Prev Page! </button> : null}
          {index + 6 < count ? <button className="cardbutton" onClick={handleNextPage}>Next Page! </button> : null}
          
        </div>

    );

}

export default EventsList; 
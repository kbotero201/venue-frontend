import React from "react"
import { Link } from "react-router-dom"



function Search({search, setSearch}){

    return(
        <div>
        {/*<Link to={"/events"}><h3>Events</h3></Link>*/}
        
        <div className="search">
           <input
            className="round"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            type="text"
            placeholder={"Search"}
            />
        </div>
        </div>
    )
}

export default Search
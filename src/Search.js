import React from "react"



function Search({search, setSearch}){

    return(
        <div>
        
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
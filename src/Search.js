import React from "react"



function Search({search, setSearch}){

    return(
        <div>
            <input
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            type="text"
            placeholder={"Search events"}
            />
        </div>
    )
}

export default Search
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import LoginButtons from "./pages/LoginButtons"
import Search from "./Search.js"

function Header({ currentUser, setCurrentUser, search, setSearch, setUserTicketList}){

        return(
            <div className="Logo">
                <Link to="/">
                <h1>
                    <span>
                🎸
                    </span>
                    Steal the Show
                </h1>
                </Link>
            </div>


      
        
        )
   // }

}

export default Header;
import React from "react";
import { Link } from "react-router-dom"
import LoginButtons from "./pages/LoginButtons"
// import Search from "./Search.js"

function Header({currentUser, setCurrentUser, setUserTicketList}){

        return(
            
        <div >
            <div className="Navbar">
            <Link to="/">
            <div>
              <img src="../images/logofinal.png"></img>
            </div>
            </Link>
          </div>  
          <div className="Navbar"></div>
          <div className="Navbar"></div>
          <div className="Navbar">
            <div>
              {currentUser ? <strong><p>Welcome, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link> 🎵 </p></strong>: null }
            </div>
          </div>
          <div className="Navbar">
            <LoginButtons currentUser={currentUser} 
                              setCurrentUser={setCurrentUser} 
                              setUserTicketList={setUserTicketList}/>
          </div>

        </div>
        
        )

}

export default Header;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"

function LoginButtons({currentUser, setCurrentUser, setUserTicketList}) {

    // auto-login
    useEffect(() => {
      fetch("http://localhost:3000/autologin")
        .then((r) => r.json())
        .then(r => setCurrentUser(r));
    }, []);
  
    // manual login
    function handleLogin() {
      fetch("http://localhost:3000/autologin")
        .then((r) => r.json())
        .then(setCurrentUser);
    }
  
    // manual logout
    function handleLogout() {
      setCurrentUser(null);
    }

    //  <button onClick={handleLogout}><Link to={`/`}>Log out</Link></button>
    //<button onClick={handleLogin}>Log in</button>

    // <Link to={`/events/${event.id}`}>{event.event_name}</Link>

    return (
      <div>
        {currentUser ? <button className="button" onClick={handleLogout}><Link to={`/`}>Log out</Link></button> : <button className="button" onClick={handleLogin}>Log in</button> }
        {currentUser ?  null : <button className="button"><Link to={`/sign-up`} >Sign Up</Link></button> }
        {currentUser ? <h1>Welcome, <Link to={`/users/${currentUser.id}`}>{currentUser.name}</Link></h1> : null }
      </div>
    );
  }

export default LoginButtons;



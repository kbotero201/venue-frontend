import React, {useEffect} from "react";
import { Link } from "react-router-dom"

function LoginButtons({currentUser, setCurrentUser}) {

    // auto-login
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/users/1")
        .then((r) => r.json())
        .then(r => setCurrentUser(r));
    }, []);
  
    // manual login
    function handleLogin() {
      console.log("Hi, moving away from autologin")
      // fetch("http://localhost:3000/autologin")
      //   .then((r) => r.json())
      //   .then(setCurrentUser);
    }
  
    // manual logout
    function handleLogout() {
      setCurrentUser(null);
    }


    return (
      <div className="flex-container">
        <div>
          {currentUser ? <button className="navbarbuttons" onClick={handleLogout}><Link to={`/`}>Log out</Link></button> : <button className="navbarbuttons" onClick={handleLogin}><Link to={`/login`}>Log in</Link></button> }

        </div>
        <div>
          {currentUser ?  null : <button className="navbarbuttons"><Link to={`/sign-up`} >Sign Up</Link></button> }

        </div>
      </div>
    );
  }

export default LoginButtons;



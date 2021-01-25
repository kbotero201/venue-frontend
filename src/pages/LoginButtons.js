import React, {useEffect, useState} from "react";


function LoginButtons() {
    const [currentUser, setCurrentUser] = useState(null);
  
    // auto-login
    useEffect(() => {
      fetch("http://localhost:3000/autologin")
        .then((r) => r.json())
        .then(setCurrentUser);
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
  
    return (
      <div>
        <button onClick={handleLogout}>Log out</button>
        <button onClick={handleLogin}>Log in</button>
        {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
      </div>
    );
  }

export default LoginButtons;
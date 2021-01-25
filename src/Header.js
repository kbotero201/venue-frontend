import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import LoginButtons from "./pages/LoginButtons"
import Search from "./Search.js"

function Header({ currentUser, setCurrentUser, search, setSearch, setUserTicketList}){

    //const [currentUser, setCurrentUser] = useState(null)
    //const [isLoaded, setIsLoaded] =useState(false);

    //auto login
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/v1/users/1")
    //     .then(r => r.json())
    //     .then(setCurrentUser)

    //     setIsLoaded(!isLoaded)
    //     setIsLogin(!isLogin)
    //     console.log(currentUser)
    // }, []);

    //console.log(currentUser, "this is the current user")
    // console.log(currentUser.name, "this is hte name") //Doesn't work?
    
    
    // manual login
    // function handleLogin() {

    //     setIsLogin((isLogin)=> !isLogin)

    //     fetch("http://localhost:3000/autologin")
    //     .then((r) => r.json())
    //     .then(data => {
    //         console.log(data, "This is the data")
    //         setCurrentUser(data)
    //         console.log("current user:" + currentUser)
    //         setIsLoaded(true);
    //     });
  
    //     console.log(currentUser, "New Login")
    // }

    // manual logout
    //   function handleLogout() {

    //     setIsLogin((isLogin)=> !isLogin)
    //     setCurrentUser(null);
    //     setIsLogin(false)
    //   }

    // if (!isLoaded) return <h2>Loading...</h2>
    // else {
    //     console.log(currentUser, "Asdf")
        return(
        <header>
            <Link to="/">
            <h1>
                <span>
               🎸
                </span>
                Steal the Show
            </h1>
            </Link>

            <Search search={search} setSearch={setSearch} />

            {/* <div>
                {isLogin ? <button onClick={handleLogout}>Log out</button> : <button onClick={handleLogin}>Log in</button>}
                {isLogin ? <h1>Welcome, PlaceHolder</h1> : "test: Welcome, not logged in"}
            </div> */}
            <div>
            
            </div>
            
            <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} setUserTicketList={setUserTicketList}/>
        </header>
        )
   // }

}

export default Header;
import React, { useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EventsList from "./EventsList"
import Header from "./Header"
import EventShow from "./pages/EventShow"


function App() {

  const[events, setEvents] = useState([])
  const[isLogin, setIsLogin] = useState(false)
  //const[currentUser, setCurrentUser] =useState([])
  //console.log(isLogin);

  // function handleLogin() {
  //   fetch("http://localhost:3000/autologin")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }

  // function handleLogout() {
  //   setCurrentUser(null);
  // }


  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/events/")
      .then(resp=> resp.json())
      .then(data => {
        //console.log(data)
        setEvents(data)
    })
  },[])

  // currentUser={currentUser} 
  // setCurrentUser={setCurrentUser} 
  
  // handleLogout={handleLogout}
  // handleLogin={handleLogin}
  
  return (
    <div>
      
      <Header 

      isLogin={isLogin} 
      setIsLogin={setIsLogin}

      />

      <p>
        Test2
      </p>

      <Switch>
      <Route exact path="/">
          <EventsList events={events}/>
        </Route>
      <Route exact path="/events/:id">
          <EventShow />
        </Route>
        <Route path="/events">
          <EventsList events={events}/>
        </Route>

        <Route path="*">
          <h1>404 Page</h1>
        </Route>
      </Switch>
      
      {/* <p> another test below!</p>
      {getCurrentPage()} */}
      
    </div>
  );
}

export default App



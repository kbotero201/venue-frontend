import React, { useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EventsList from "./EventsList"
import Header from "./Header"
import EventShow from "./EventShow"


function App() {

  const[events, setEvents] = useState([])

  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/events/")
      .then(resp=> resp.json())
      .then(data => {
        //console.log(data)
        setEvents(data)
    })
  },[])

  // function getCurrentPage(){
  //   const pathname = window.location.pathname
  //   console.log(pathname)
  //   if (pathname === "/"){
  //     return <EventsList events={events}/>
  //   } else if (pathname === "/events"){
  //     return <EventsList events={events}/>
  //   } else if (pathname === "/event/1") {
  //     return  <EventShow /> 
  //   } else {
  //     return <h1> 404 not found </h1>
  //   }
  // }

  
  return (
    <div>
      
      <Header />

        <p>
          Test2
        </p>
      <Switch>
      <Route exact path="/events/:id">
          <h1> asdf adsfkjasldf </h1>
          <EventShow />
        </Route>
        <Route path="/events">
          <EventsList events={events}/>
        </Route>
        <Route path="/">
          <EventsList events={events}/>
        </Route>
      </Switch>
      
      {/* <p> another test below!</p>
      {getCurrentPage()} */}
      
    </div>
  );
}

export default App



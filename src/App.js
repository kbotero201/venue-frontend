import React, { useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EventsList from "./EventsList"
import Header from "./Header"
import EventShow from "./pages/EventShow"
import UserShow from "./pages/UserShow"
import AddUserForm from "./AddUserForm"


function App() {

  const[events, setEvents] = useState([])
  //const[isLogin, setIsLogin] = useState(false)
  const [eventsToShow, setEventsToShow] = useState([])
  const[currentUser, setCurrentUser] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [userTicketList, setUserTicketList] = useState([])


  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/events/")
      .then(resp=> resp.json())
      .then(data => {
        setEvents(data)
    })
  },[])

  let filteredSearch= events.filter(
    (event)=> event.event_name.toLowerCase().includes(search.toLowerCase())
    ).filter((event) => {
      if (selectedCategory === "All") {
        return true
      } else {
      return (event.event_type === selectedCategory)
      }
    })

  //let filteredSearch2= events.filter(
  //  (event)=> event.performer_name.toLowerCase().includes(search.toLowerCase())
  //)
  // let finalFiltered = filteredSearch.concat(filteredSearch2).unique()





  return (
    <div>
      
      <Header 
      currentUser={currentUser} 
      setCurrentUser={setCurrentUser}
      search={search}
      setSearch={setSearch}
      setUserTicketList={setUserTicketList}
      />


      <Switch>
      <Route exact path="/">
          <EventsList events={filteredSearch} 
                      setSelectedCategory={setSelectedCategory}/>
        </Route>
      <Route exact path="/events/:id">
          <EventShow currentUser={currentUser}  
                      setCurrentUser={setCurrentUser} 
                      setUserTicketList={setUserTicketList} 
                      userTicketList={userTicketList}/>
        </Route>
        <Route path="/events">
          <EventsList events={events}/>
        </Route>
        <Route exact path="/users/:id">
          <UserShow currentUser={currentUser} 
                    setCurrentUser={setCurrentUser} 
                    userTicketList={userTicketList} 
                    setUserTicketList={setUserTicketList}/>
        </Route>
        <Route exact path="/sign-up">
          <AddUserForm />
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



import React, { useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EventsList from "./EventsList"
import VenuesList from "./VenuesList"
import EventShow from "./pages/EventShow"
import UserShow from "./pages/UserShow"
import VenueShow from "./pages/VenueShow"
import AddUserForm from "./AddUserForm"
import LoginButtons from "./pages/LoginButtons"
import Home from "./Home"
import LoginPage from "./pages/LoginPage"
import { Link } from "react-router-dom"



function App() {

  const[events, setEvents] = useState([])
  const [venues, setVenues] = useState([])
  const[currentUser, setCurrentUser] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchBy, setSearhBy] = useState("event_name")
  const [venueSearchBy, setVenueSearchBy] = useState("location")
  const [index, setIndex] = useState(0)

  const [userTicketList, setUserTicketList] = useState([])


  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/events/")
      .then(resp=> resp.json())
      .then(data => {
        setEvents(data)
    })
  },[])

  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/venues/")
      .then(resp=> resp.json())
      .then(data => {
        setVenues(data)
    })
  },[])



  let filteredSearch= events.filter(
    (event)=> {
      if(searchBy === "event_name"){
        return event.event_name.toLowerCase().includes(search.toLowerCase())
      } else if (searchBy === "performer_name"){
        return event.performer_name.toLowerCase().includes(search.toLowerCase())
      } else if (searchBy === "description"){
        return event.description.toLowerCase().includes(search.toLowerCase())
      }
    }
    ).filter((event) => {
      if (selectedCategory === "All") {
        return true
      } else {
      return (event.event_type === selectedCategory)
      }
    })


    let venuesFilteredSearch= venues.filter(
      (venue)=> {
        if(venueSearchBy === "venue_name"){
          return venue.name.toLowerCase().includes(search.toLowerCase())
        } else if (venueSearchBy === "location"){
          return venue.location.toLowerCase().includes(search.toLowerCase())
        } else if (venueSearchBy === "description"){
          return venue.description.toLowerCase().includes(search.toLowerCase())
        }
      })





  return (
    <div className="grid-container">
      
     
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

  


     

      <div className="Search">
        <div className="flex-container">
          <div className="linksdiv"> <Link to={"/"}><h3>Home</h3></Link> </div>
          <div className="linksdiv"> <Link to={"/events"}><h3>Events</h3></Link> </div>
          <div className="linksdiv"> <Link to={"/venues"}><h3>Venues</h3></Link> </div>

        </div>

      </div>

      

      <div className="UserTab">


      </div>
    

      <div className="MainArea">
      <Switch>
      <Route exact path="/">
          <Home events={events}/>
        </Route>
      <Route exact path="/events/:id">
          <EventShow currentUser={currentUser}  
                      setCurrentUser={setCurrentUser} 
                      setUserTicketList={setUserTicketList} 
                      userTicketList={userTicketList}/>
        </Route>
        <Route path="/events">
            <EventsList search={search} setSearch={setSearch}
                      events={filteredSearch} 
                      setSelectedCategory={setSelectedCategory}
                      setSearhBy={setSearhBy}
                      index={index}
                      setIndex={setIndex}
                      />
        </Route>
        <Route exact path="/venues">
            <VenuesList search={search} setSearch={setSearch}
                      venues={venuesFilteredSearch} 
                      setVenueSearchBy={setVenueSearchBy}
                      index={index}
                      setIndex={setIndex}
                      />
        </Route>
        <Route exact path="/users/:id">
          <UserShow events={events}
                    currentUser={currentUser} 
                    setCurrentUser={setCurrentUser} 
                    userTicketList={userTicketList} 
                    setUserTicketList={setUserTicketList}/>
        </Route>
        <Route exact path="/sign-up">
          <AddUserForm />
        </Route>
        <Route exact path="/login">
          <LoginPage setCurrentUser={setCurrentUser}/>
        </Route>

        <Route exact path="/venues/:id">
          <VenueShow events={events}/>
        </Route>

        <Route path="*">
          <h1>404 Page</h1>
        </Route>
      </Switch>
      </div>
      
      <div className="Blank">
      </div>
      
    </div>
  );
}

export default App



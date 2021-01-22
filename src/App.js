import React, { useEffect } from "react";
import './App.css';
import EventsList from "./EventsList"

function App() {

  const[events, setEvents] = useState([])

  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/venues/")
      .then(resp=> resp.json())
      .then(data => {
        console.log(data)
        //setEvents(data)
    })
  },[])


  
  return (
    <div>
      
        <p>
          Test2
        </p>
        
      
      <EventsList />
      
    </div>
  );
}

export default App



import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"

function LoginPage({setCurrentUser}) {


    const [name, setName] =useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/api/v1/users/")
          .then(resp=> resp.json())
          .then(data => {
            setUsers(data)
        })
    },[])



    function handleSubmit(evt){
      //console.log("submitted!")
      //console.log(users)
      evt.preventDefault()
      let good = false;


      users.forEach ( userObj => {
          if (userObj.name === name){
            fetch(`http://localhost:3000/api/v1/users/${userObj.id}`)
            .then(resp=> resp.json())
            .then(data => {
                setCurrentUser(data)
                //window.location.replace('/events');
                good = true;
                
            })
            
            //console.log("Asdf")

          }
      })

  }



    return(
    <div className="cardlogin">

      <div>
      <h1> Login </h1>
        <form onSubmit={handleSubmit} >
        <div >
          <p> Name </p>
          <div className="search">
          <input className="round"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="name" 
            name="name" 
            placeholder="Name..." />
          </div>
          
          <p> Password </p>
          <div className="search">
          <input className="round"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password" 
            name="password" 
            placeholder="Password..." />
          </div>
        </div>

      <div className="buttondiv">
        <button className="signupbutton" type="submit">
          Login 
        </button>
      </div>

        </form>
        {/* <div>
            <input type="checkbox" id="agree" name="agree"/>
            <label for="scales">Remember Me</label>
        </div> */}


        {/* <span class="popuptext" id="myPopup">Popup text...</span> */}

      </div>

    </div>
    )
}
  
export default LoginPage;
import React, {useState, useEffect} from "react";

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
      evt.preventDefault()
      let good = false;


      users.forEach ( userObj => {
          if (userObj.name === name){
            fetch(`http://localhost:3000/api/v1/users/${userObj.id}`)
            .then(resp=> resp.json())
            .then(data => {
                setCurrentUser(data)
                good = true;  
            })
          }
      })
  }



    return(
    <div className="cardlogin">

      <div className="fillsignup">
        <img src="./images/bannerlong.png" /> 
      </div>

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
      </div>

    </div>
    )
}
  
export default LoginPage;
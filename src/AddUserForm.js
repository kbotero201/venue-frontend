import React, {useState} from "react";

function AddUserForm(){


  const[favorite, setFavorite] = useState("")
  const [name, setName] =useState("")
  const [password, setPassword] = useState("")



  function handleSubmit(evt){
      console.log("submitted!")
      evt.preventDefault()

      let newUser = {
        name:  name,
        password: password, 
        favorite: favorite,
      }

      fetch("http://localhost:3000/api/v1/users/", {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
      })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
  }



    return(
    <div className="cardlogin">
      <div className="fillsignup">
        <img src="./images/bannerlong.png" /> 
      </div>
      


      <div>
      <h1> Sign Up </h1>
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

          <p> Favorite Event </p>
          <div className="search">
            <select className="round" value={favorite} onChange={(e)=> setFavorite(e.target.value)} name="favorite" type="favorite" >
                <option value="Concert"> Concert </option>
                <option value="Party"> Party </option>
                <option value="Movies"> Movies </option>
            </select>
          </div>
        </div>

      <div className="buttondiv">
        <button className="signupbutton" type="submit">
          Sign Up
        </button>
      </div>

        </form>
        <div>
            <input type="checkbox" id="agree" name="agree"/>
            <label for="scales">Remember Me</label>
            <p>
            By continuing past this page, you agree to the Terms of Use and understand that information will be used as described in our Privacy Policy.
            </p>
        </div>
      </div>

    </div>
    )
  }


export default AddUserForm
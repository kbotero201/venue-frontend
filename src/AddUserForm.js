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
    <div className="card">
      <div>
        <h1> Sign Up </h1>
      </div>
       

      <div>
        <form onSubmit={handleSubmit} >
        <div >
          <p> Name </p>
          <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="name" 
            name="name" 
            placeholder="Name..." />
          
          <p> Password </p>
          <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password" 
            name="password" 
            placeholder="Password..." />
            <p> Favorite Event </p>
            <select  value={favorite} onChange={(e)=> setFavorite(e.target.value)} name="favorite" type="favorite" >
                <option value="Concert"> Concert </option>
                <option value="Party"> Party </option>
                <option value="Movies"> Movies </option>
            </select>
        </div>
        <button type="submit">
          Sign Up
        </button>
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
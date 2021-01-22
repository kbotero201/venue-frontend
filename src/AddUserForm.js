import React from "react";

function AddUserForm(){

    return(
    <div>
        <form >
        <div >
          <input 
            //value={name}
            //onChange={(e)=> setName(e.target.value)}
            type="name" 
            name="name" 
            placeholder="Name..." />
          <input 
            //value={password}
            //onChange={(e)=> setPassword(e.target.value)}
            type="password" 
            name="password" 
            placeholder="Password..." />
        </div>
        <button type="submit">
          Sign Up
        </button>
        </form>
    </div>
    )
  }


export default AddUserForm
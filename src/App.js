import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "", 
  });
  const [formError, setformError] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);
  const changehandler = (e)=>{
    setdata({...data, [e.target.id]: e.target.value})
  }
  const formhandler = (e)=>{
    e.preventDefault();
    setformError(validation(data))
    setisSubmitted(true);
  }
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmitted) {
      console.log("submitted");
    }
    console.log(formError)
  }, [formError]);
  const validation = (e)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if(!e.name){
      errors.name = "Name is required"
    }
    if(!e.email){
      errors.email = "Email is required"
    }
    if(!regex.test(e.email)){
      errors.email = "Email is not valid"
    }
    if(!e.password){
      errors.password = "Password is required"
    }
    if(e.password.length < 6){
      errors.password = "Password must be 6 characters"
    }
    return errors;
     
  }
  return (
    <>
      <div className="main">
         <div className="form">
            <h1>Sign Up</h1>
            <hr />
            <form onClick={formhandler}>
                <label htmlFor="name">Name</label>
                <input onChange={changehandler} type="text" value={data.name} id="name" placeholder="Enter your name" />
                {<p>{formError.name}</p>}
                <label htmlFor="email">Email</label>
                <input onChange={changehandler} type="email" value={data.email} id="email" placeholder="Enter your email" />
                {<p>{formError.email}</p>}
                <label htmlFor="password">Password</label>
                <input onChange={changehandler} type="password" value={data.password} id="password" placeholder="Enter your password" />
               {<p>{formError.password}</p>}
                <button>submit</button>
            </form>
          
         </div>
      </div>
    </>
  );
};

export default App;

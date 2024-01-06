import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios"
const Addform = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
axios.defaults.withCredentials=true
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post(`${window.location.origin}/createUser`,{
      name:data.name,
      email:data.email,
      age:data.age
    }).then((result)=>{
      console.log(result)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div className="d-flex vh-100 bg-primary align-items-center justify-content-center flex-column p-3">
      <form
        action="post"
        className="d-flex w-50 bg-white align-items-center justify-content-center flex-column my-5 p-3"
        onSubmit={submitHandler}
      >
        <h2>Add User</h2>

        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Name"
          className="my-2 rounded w-75 py-1 form-control"
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Email"
          className="my-2 rounded w-75 py-1 form-control"
          onChange={changeHandler}
        />
        <input
          type="number"
          name="age"
          value={data.age}
          placeholder="Age"
          className="my-2 rounded w-75 py-1 form-control"
          onChange={changeHandler}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addform;

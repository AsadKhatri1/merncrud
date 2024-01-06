import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
axios.defaults.withCredentials=true;
  useEffect(() => {
    axios
      .get("hhttps://merncrudapi.vercel.app")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelte=(id)=>{
    axios.delete("https://merncrudapi.vercel.app/delete/"+id).then((result)=>{
      console.log(result)
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
      <div className="d-flex vh-100 bg-primary align-items-center justify-content-center flex-column">
        <div className="bg-white w-50 rounded p-3">
          <Link to="/add" className="btn btn-success">
            Create a new user +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-info mx-1">
                        Edit
                      </Link>
                      <button className="btn btn-danger mx-1" onClick={(e)=>handleDelte(user._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

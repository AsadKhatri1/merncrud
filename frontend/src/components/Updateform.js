import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Updateform = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
axios.defaults.withCredentials=true
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`${window.location.origin}/updateUser/` + id, {
        name: name,
        email: email,
        age: age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(``${window.location.origin}/getUser/` + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary align-items-center justify-content-center flex-column p-3">
      <form
        action="post"
        className="d-flex w-50 bg-white align-items-center justify-content-center flex-column my-5 p-3"
        onSubmit={submitHandler}
      >
        <h2>Update User</h2>

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="my-2 rounded w-75 py-1 form-control"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="my-2 rounded w-75 py-1 form-control"
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="my-2 rounded w-75 py-1 form-control"
        />
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
};

export default Updateform;

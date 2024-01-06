const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
mongoose
  .connect(
    "mongodb+srv://hafizasad398:dadabhai123@merncrud.zi7uzlp.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.post("/createUser", (req, res) => {
  userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    })
    .then((user) => {
      res.json(user);
    });
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, age: req.body.age }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
});
app.listen(port, () => {
  console.log(`server is listening port ${port}`);
});

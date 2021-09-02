//IMPORTS AT THE TOP
const express = require("express");
const User = require("./users/model");

//INSTANCE OF THE EXPRESS APP
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());

//ENDPOINTS req is talking to the server, res is the response given to the client

// [GET] api/users/:id (R of CRUD, fetch user by id)

server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((users) => {
      if (!users) {
        res.status(404).json("User not found");
      } else {
        res.status(200).json(users);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Could not get user by id", error: error.message });
    });
});

// [GET] api/users (R of CRUD, fetch all users)

server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      // console.log(users)
      res.status(200).json(users);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Could not get all users", error: error.message });
    });
});

// [POST] api/users (C of CRUD, create new user from JSON payload)

server.post("/api/users", (req, res) => {
  const newUser = req.body;
  User.insert(newUser)
    .then(users => {
      res.status(201).json(users)
    })
    .catch(error => {
      res.status(500).json({message: "Could not post new user", error: error.message})
    })
});

// [PUT] api/users/:id (U of CRUD, update user with :id using JSON payload)

// [DELETE] api/users/:id (D of CRUD, remove user with :id)




server.use("*", (req, res) => {
  res.status(404).json({ message: "Could not access" });
});

module.exports = server;

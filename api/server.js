//IMPORTS AT THE TOP
const express = require("express");

//INSTANCE OF THE EXPRESS APP
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());

//ENDPOINTS req is talking to the server, res is the response given to the client
server.use("/", (req, res) => {
  res.status(200).json({message: "Why hello there!"})
});

// [GET] api/users/:id (R of CRUD, fetch user by id)

// [GET] api/users (R of CRUD, fetch all users)

// [POST] api/users (C of CRUD, create new user from JSON payload)

// [PUT] api/users/:id (U of CRUD, update user with :id using JSON payload)

// [DELETE] api/users/:id (D of CRUD, remove user with :id)


module.exports = server;
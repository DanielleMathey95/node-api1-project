//IMPORTS AT THE TOP
const express = require(express);

//INSTANCE OF THE EXPRESS APP
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());

//ENDPOINTS req is talking to the server, res is the response given to the client
server.use("*", (req, res) => {
  res.status(200).json({message: "Why hello there!"})
});


module.exports = server; // EXPORT YOUR SERVER instead of {}
const express = require("express");

const server = express();

const PORT = 8000; //Dev purposes

// Define Methods:

server.get("token", (req,res) => {
  
});


// Start listening for calls to the server
server.listen(PORT, () => {console.log("Server is up and listening!")});





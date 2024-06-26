const express = require('express');
const bodyParser = require('body-parser');

require("./Database/db") 
require("dotenv").config();
const adminRoutes = require("./Routes/adminRoutes")
const theaterOwnerRoutes = require("./Routes/theaterOwnerRoutes")

const port = 8000;

const app = express();

app.use(bodyParser.json());


app.get("/", (_req, res) => {
res.send("server is running");
});


app.use('/api', adminRoutes);
app.use('/api/theater',theaterOwnerRoutes);



app.listen(port, () => {
    console.log("App is running on port " + port);
  });

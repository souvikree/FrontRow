
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors")
const helmet = require('helmet');

require("./Database/db") 
require("dotenv").config();
const adminRoutes = require("./Routes/adminRoutes")
const theaterOwnerRoutes = require("./Routes/theaterOwnerRoutes")
const movieRoutes = require("./Routes/movieRoutes")
const userRoutes = require("./Routes/userRoutes")


const port = 8000;

const app = express();

app.use(bodyParser.json());


const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.set('etag', false);
app.use(helmet());

app.use((_req, res, next) => {
  // Disable caching for all responses by default
  res.setHeader('Cache-Control', 'no-store');

  // Set other headers as needed, depending on your application requirements
  // Example: Allow caching for static assets with a max age of 1 hour
  // res.setHeader('Cache-Control', 'public, max-age=3600');

  // Continue to next middleware or route handler
  next();
});

app.get("/", (_req, res) => {
res.send("server is running");
});


app.use('/api', adminRoutes);
app.use('/api/theater',theaterOwnerRoutes);
app.use('/api', movieRoutes )
app.use('/api', userRoutes )




app.listen(port, () => {
    console.log("App is running on port " + port);

})
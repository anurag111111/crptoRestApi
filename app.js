const express = require('express');
  require('dotenv').congif();
const mongoose = require('mongoose');
const app = express();const PORT = 8088

const crypRoute = require('./routes/cryp');

// connect to mongodb atlas
mongoose.connect(process.env.DATABASE );
mongoose.log("connected to mongodb atlas...").catch.log("something wrong happened",error);


//middlewares
app.use(express.json());
app.use(express.urllencoded({extended:true}));

//routes
app.use('api/currency', crypRoute);
app.get('/',  (req, res) => {
    res.send("landing page")
  });
  
  
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  }) 
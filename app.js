// require('dotenv').congif({path:"./.env"});
const express = require('express');

const mongoose = require('mongoose');
const app = express();
const PORT =process.env.PORT || 8088

const crypRoute = require('./routes/cryp');

// connect to mongodb atlasmongodb+srv://bhxshxn:b
const url = "mongodb+srv://cryptocurrency:1234@cluster0.asa4f.mongodb.net/cyptoi?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database is connected successfully on port 27017!!!');
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extened: true }));

//routes
app.use('/api/currency', crypRoute);
app.get('/',  (req, res) => {
    res.send("landing page")
  });
  
 
  
  app.listen(PORT || port, () => {
    console.log("listening 8080...");
  });
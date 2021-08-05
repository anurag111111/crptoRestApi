const express = require('express');
const router = express.Router();

const cryptodet = require('../models/schema');
//post:create 
router.post('/',(req,res)=>{
    crypton = new cryptodet({
        name:req.body.name,
        symbol:req.body.symbol,
        price:req.body.price,
        marketcap:req.body.marketcap,
        change:req.body.change
    });

    crypton.save().then(crypton =>{
        res.send(crypton);

    }).catch(error =>{
        res.status(500).send("information regarding crypto was not saved in db");
    });

});

module.exports =router;
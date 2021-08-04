const express = require('express');
const router = express.Router();
const router = express.Router();
const crptodet = require('../models/schema');
//post:create 
router.post('/',(req,res)=>{
    crypton = new cryptodet({
        name:req.body.crypName,
        symbol:req.body.cryoSymb,
        price:req.body.priceAmt,
        marketcap:req.body.markAmt,
        change:req.body.chngeCryp
    });

    crptodet.save().then(crptodet =>{
        res,send(crptodet);

    }).catch(error =>{
        res.status(500).send("information regarding crypto was not saved in db");
    });

});

module.exports =router;
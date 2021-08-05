const express = require('express');
const router = express.Router();

const cryptodet = require('../models/schema');
//post:create 
router.post('/', async (req,res)=>{
    crypton = new cryptodet({
        name:req.body.name,
        symbol:req.body.symbol,
        price:req.body.price,
        marketcap:req.body.marketcap,
        change:req.body.change

       
    });
    crypton.save().then(crypton =>{
        res.send(crypton);
    })
    .catch(error =>{
        res.status(500).send("information regarding crypto was not saved in db");
    
    });
});

    //GET ALL DATA

    router.get('/' , (req, res) => {
        cryptodet.find({})
        .then(crypton => res.send(crypton))
        .catch(error=> res.status(500).send("something went wrong"))
        
    });
    

    //.GET THE DATA USING ID
     
    router.get("/:cryptoId", (req,res)=> {
        cryptodet.findById(req.params.cryptoId)
        .then(crypton => {
            if(crypton) res.send(crypton);
            res.status(404).send("book not found");
        })
        .catch(error => res.status(500).send(error.message))
        
    });

    //UPDATE DATA BASED IN ID
    router.put("/api/currency/:cryptoId", async (req,res) =>{
    const updatedData = await cryptodet.findByIdAndUpdate(req.params.cryptoId,{
        name:req.body.name,
        symbol:req.body.symbol,
        price:req.body.price,
        marketcap:req.body.marketcap,
        change:req.body.change
        
    }
    ,{new:ture});
    if(!updatedData) res.status(404).send("data not found");
    res.send(updatedData);

    });

    // //DELETE DATA BASED ON ID
     router.delete("/api/currency/:cryptoId", async (req,res) =>{
         const  crypton = await cryptodet.findByIdAndRemove(req.params.cryptoId);
          if(!cypton) res.status(404).send("data not found");
         res.send(crypton);
     });




module.exports =router;
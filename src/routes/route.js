const express = require('express');
const router = express.Router();
const userModel =require('../models/userModel');



router.post('/router', function(req, res){
   res.send("my first ever api")
});

router.post("/createUser",async function(req, res){
   let data = req.body;
   let saveData = await userModel.create(data)
   res.send({msg:saveData});
});

router.get("/getUsersData",async function(req, res){
   let allUsers = await userModel.find()
   res.send({msg:allUsers})
});



module.exports = router;
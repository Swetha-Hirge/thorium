const express = require('express');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]


router.post('/person-query1',function(req, res){
    let input = req.query.votingAge;
  let filtered= persons.filter(item => item.age >=input );
  //console.log(filtered)
  filtered.map(item => item.votingStatus=true)
  res.send(filtered)
})
    
   







module.exports = router;
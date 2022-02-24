const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})


//take  in user input inreq.query variable and send pass if >40 else fail
router.get("/get-query-1", function(req,res){
  let marks =req.query.marks;
  //{marks:'80'}
  let result = marks>40? "pass": "fail"
//   let result = "fail"
//   if (marks>40) result = "pass"
 //else result = "fail"
    
    res.send({result:result, status: true})
})

router.post('/pst-query-1', function(req, res){
    let data =req.query
    console.log(data)
    res.send({result:data ,status: true})
})


let myArry =[23, 45, 67, 201394, 545, 48556, 5565, 86559, 558]
router.post("/post-query-3", function(req, res){
    let input = req.query.input;
    let finalArry =myArry.filter(ele =>ele>input) 
    // let finalArray=[]
    // for( let i=0; i<myArry.length; i++){
    //     if(myArry[i]>input) finalArray.push(myArry[i])
    // }
    res.send({result:finalArry, status: true})
})
module.exports = router;


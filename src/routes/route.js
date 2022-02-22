const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })
router.get('/movies', function(req, res){
    res.send('["Frozen", "cindrella", "Inside Out", "Encanto", "moana"]') 
})

router.get('/movies/:movid', function(req, res){
    film=["Frozen", "cindrella", "Inside Out", "Encanto", "moana"]
    let movieNum= req.params.movid
    if(movieNum>film.length-1){
        res.send("the movies doesnot exist")
    }else{
        res.send(film[movieNum])
    }

})

router.get('/films', function(req, res){
   let movObj= [ {
    id: 1,
    name: 'cindrella'
   }, {
    id: 2,
    name: 'Inside Out'
   }, {
    id: 3,
    name: 'Encanto'
   }, {
    id: 4,
    name: 'moana'
   }]
   res.send(movObj);
    
})

router.get('/films/:filmId', function(req, res){
    let movObj= [ {
        id: 1,
        name: 'cindrella'
       }, {
        id: 2,
        name: 'Inside Out'
       }, {
        id: 3,
        name: 'Encanto'
       }, {
        id: 4,
        name: 'moana'
       }]
       let filmNum= req.params.filmId
       let num = false;
       for(let i=0; i<movObj.length; i++){
           if(movObj[i].id === filmNum){
               num= true;
           res.send(movObj[i])
           break;
           }
       }
       if(num==false){
        res.send('No movie exists with this id')
    }

})





module.exports = router;

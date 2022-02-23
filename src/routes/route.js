const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
//  // Your route code will look like this
//  router.get("/sol1", function (req, res) {
// 	//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
// 	let arr= [1,2,3,5,6,7]
//         let n = arr.length;
// 	   let missingNumber = getMissingNo(arr,n)
//         function getMissingNo(a,n){
//              let totalNum = Math.floor((n+1)*(n+2)/2);
//              for (let i=0; i<n ; i++)
//              totalNum = totalNum - a[i];
//              return totalNum ;
//         }

// 	   ///LOGIC WILL GO HERE 
// 	res.send( { data: missingNumber } );
// });


// router.get("/sol2", function (req, res) {
// 	//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
// 	let arr= [33, 34, 35, 37, 38]
//         let n = arr.length;
// 	   let missingNumber = getMissingNo(arr,n)

//         function getMissingNo(a,n){

//             let minVal = Math.min(...arr);
//             let num = 0;
//             for (let i = 0; i < n; i++) {
//                 num = num^ (minVal) ^ arr[i];
//                 minVal++;
//             }
         
           
//             return num ^ minVal;
//         }

// 	   ///LOGIC WILL GO HERE 
// 	res.send( { data: missingNumber } );
// });


router.post('/test-post',function(req, res){
    res.send("check post requset")
})




module.exports = router;

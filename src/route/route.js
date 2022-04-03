const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController");
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const middleware = require('../middleware/middleware')
const aws = require('aws-sdk')



aws.config.update(
    {
        accessKeyId: "AKIAY3L35MCRVFM24Q7U",
        secretAccessKey: "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",
        region: "ap-south-1"
    }
)

let uploadFile = async (file) => {
    return new Promise( function(resolve, reject) {
        //this function will upload file to aws and return the link
        let s3 = new aws.S3({ apiVersion: "2006-03-01" }) //we will be using s3 service of aws
       
        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket", // HERE
            Key: "booksCover/" + file.originalname, // HERE 
            Body: file.buffer
        }

      s3.upload(uploadParams, function (err, data) {
            if (err) { 
                return reject({ "error": err }) 
            }

            console.log(data)
            console.log(" file uploaded successfully ")
            return resolve(data.Location) // HERE
          }
        ) }
    )
}
router.post('/write-file-aws', async function (req, res) {
    try {
        let files = req.files
        if (files && files.length > 0) {
            //upload to s3 and get the uploaded link
            
            let uploadedFileURL = await uploadFile(files[0])
            return res.status(201).send({status:true,msg:"file uploaded successfully" ,data:uploadedFileURL})
            
        }
        else {
            res.status(400).send({ msg: "No file found" })
        }
    }
    catch (err) {
        res.status(500).send({ msg: err })
    }
}
)


router.post("/register", userController.createUser)
router.post("/login", loginController.login)

router.post("/books", middleware.authentication, bookController.createBook)
router.get("/books", middleware.authentication, bookController.getBook)
router.get("/books/:bookId", middleware.authentication, bookController.getBooksById)
router.put("/books/:bookId", middleware.authentication, middleware.authorization, bookController.updateBooks)
router.delete("/books/:bookId", middleware.authentication, middleware.authorization, bookController.deleteBook)

router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId", reviewController.updateReviews)
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)



module.exports = router; 
// module.exports.uploadFile=uploadFile

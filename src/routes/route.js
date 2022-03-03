const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook)
router.put("/putCover", bookController.putCover)
router.put("/putPrice", bookController.updatePrice)


router.post("/createPublisher", publisherController.createPublisher)

router.get("/getBooks", bookController.getBooks)

module.exports = router;
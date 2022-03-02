const express = require('express');
const router = express.Router();
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
const bookController = require('../controllers/bookController')
router.post('/createAuthor', bookController.createAuthor)
router.post('/createBook', bookController.createBook)
router.get('/allBooks', bookController.allBooks)
router.get('/updatedBookPrice', bookController.upadatedBookPrice)
router.get('/authorsName', bookController.authorsName)
module.exports = router;
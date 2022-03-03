const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    if(!authorId){

    return res.send('The request is not valid as the author details are required.')
    }

    let author = await authorModel.findById(authorId)
    if(!author)
    { 
        return res.send('The request is not valid as no author is present with the given author id')
    }

    if(!publisherId){

        return res.send('The request is not valid as the publisher details are required.') 
    }
    
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher){
         return res.send('The request is not valid as no publisher is present with the given publisher id')
    }
    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}


const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const putCover= async function(req, res){
    let dataBook= await bookModel.updateMany(
        {publisher:{$in:["621fcfe8ad14d91ab77f66c2","621fcfc7ad14d91ab77f66c0"]}},
        {$set:{isHardCover:true}} ,
        {new:true}
           )
           let bookList= await bookModel.find()
           res.send({data:bookList})
}

const updatePrice= async function(req, res){
    let authorId=await authorModel.find({rating:{$gt:4.5}}).select({_id:1})
    let arr1=[]
    arr1 = authorId.map(e=>e._id)
    let data1= await bookModel.updateMany(
        {author:{$in:arr1}},
        {$inc:{price:+10}},
        {new:true})
        let latestBooks= await bookModel.find()
        res.send(latestBooks)
}
//     let dataPrice= await bookModel.updateMany(
//         {rating:{$gt:4.5}},
//         {price:{$add:10}},
//         {new:true}
//     )
//     res.send({data:dataPrice})
// }

module.exports.createBook= createBook
module.exports.putCover=putCover
module.exports.getBooks = getBooks
module.exports.updatePrice=updatePrice
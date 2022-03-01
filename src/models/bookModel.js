const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
   // sales: {type: Number, default: 10},
    year:{
        type:Number,
        default:2021,
    },
    totalPages:Number,
    stokAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('BooksLibray', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

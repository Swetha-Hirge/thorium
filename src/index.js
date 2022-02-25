const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/routes/route');
const {default: mongoose} = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://swetha:MrY5zQ2rHMae802L@cluster0.0xins.mongodb.net/swetha123?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("mongoDb is connected"))
.catch (err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

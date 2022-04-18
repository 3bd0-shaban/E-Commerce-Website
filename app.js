const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const port = 3000;
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use(express.static("public"));

/////////////////////////////

app.use('/api/user/', require('./routes/router.js'));
////////////////////////////////


// mongoose

mongoose
    .connect(
        "mongodb+srv://3bdo:0777888999@cluster0.6pmbd.mongodb.net/all-data?retryWrites=true&w=majority"
    )
    .then((result) => {
        app.listen(port, () => {
            console.log('Run Successfully at http://localhost:3000');
        })
    })
    .catch((err) => { console.log(err); })
    .then(result => {
        // app.listen(3000);
    })
// .catch((err) => {
//     console.log(err);
// })
app.use('/',require('./routes/router'))
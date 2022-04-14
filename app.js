const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use(express.static("public"));

/////////////////////////////


////////////////////////////////
const modelproductadd = require("./models/addProduct");
// For Auto Refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));


// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });




//connect to mongoDB
// mongoose.connect("mongodb://localhost:27017/online-storeDB"); //connect local


//home route
app.get("/", function (req, res) {
    res.redirect("3bdo");
})

app.get("/3bdo", function (req, res) {
    modelproductadd.find()
    .then((result) => {
        res.render("mainpage",{arrproduct:result});
    })
    .catch((err) => {
        console.log(err);
    });
});

// Result   = object inside mongodb

app.get("/mainpage/:id", function (req, res) {
    // res.render("productPage");
    // const id = req.params.id
    modelproductadd.findById(req.params.id)
    .then((result) =>{
        res.render("productPage",{objproduct:result});
    })
    .catch((err) =>{
        console.log(err);
    })
});

// app.get("/mainpage/category", function (req, res) {
//     modelproductadd.find()
//     .then((result) =>{
//         res.render("productpage",{arrproduct:result});
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/signUp", function (req, res) {
    res.render("signUp");
});
app.get("/signin", function (req, res) {
    res.render("signIn");
});
app.get("/addproduct", function (req, res) {
    // res.render("AddProductSeller");
    modelproductadd.find()
    .then((result) =>{
        res.render("AddProductSeller",{arrproduct:result});
    })
    .catch((err) =>{
        console.log(err);
    })
});



app.post("/upload_Product_data", (req, res) => {
    const productstore = new modelproductadd(req.body);

    console.log(req.body);

    productstore
        .save()
        .then(result => {
            res.redirect("/addproduct");
            res.send(console.dir(req.files));
        })
        .catch(err => {
            console.log(err);
        });
});


















// mongoose
const mongoose = require("mongoose");

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


app.use(function (req, res) {
    res.status(404).send("Sorry Not Found");
})


//listening to the Port.
// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 3000;
// }
// app.listen(port, function () {
//     console.log("server has started successfully");
// })
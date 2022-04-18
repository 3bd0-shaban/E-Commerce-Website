
const modelproductadd = require("../models/addProduct");

exports.homeRoutes = (req, res) => {
    modelproductadd.find()
    .then((result) => {
        res.render("mainpage",{arrproduct:result,stylecss:"/css/mainpage.css",title:'mingo'});
    })
    .catch((err) => {
        console.log(err);
    });
}
// Result   = object inside mongodb
exports.go_to_productpage = (req,res)=>{
    modelproductadd.findById(req.params.id)
    .then((result) =>{
        res.render("ProductPage",{objproduct:result,stylecss:'/css/ProductPage.css',title:'Product'});
    })
    .catch((err) =>{
        console.log(err);
    })
}
exports.signup = (req,res)=>{
    res.render("signUp",{stylecss:'',title:'Rigster'});
}
exports.signin = (req,res)=>{
    res.render("signIn",{stylecss:'',title:'sign in'});
}
exports.cart = (req,res)=>{
    res.render("cart",{stylecss:'css/cart.css',title:'Cart'});
}
exports.profile = (req,res)=>{
    res.render("PersonalProfile",{stylecss:'css/personalProfile.css',title:'Profile'});
}
exports.seach = (req,res)=>{
    res.render("Searching",{stylecss:'css/Searching.css',title:'Searching......'});
}
exports.signupseller = (req,res)=>{
    res.render("signupseller",{stylecss:'',title:'Sign Up For Sellers'});
}
exports.category = (req,res)=>{
    modelproductadd.find({category:'Laptop'})
    .then((result) => {
        res.render("categories",{arrproduct:result,stylecss:'css/Searching.css',title:'Category'});
    })
    .catch((err) => {
        console.log(err);
    });   
};
exports.addproduct = (req,res)=>{
    modelproductadd.find()
    .then((result) =>{
        res.render("AddProductSeller",{arrproduct:result});
    })
    .catch((err) =>{
        console.log(err);
    })
}



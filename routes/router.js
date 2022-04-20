const express = require("express");
const route = express.Router();
const jwt = require('jsonwebtoken'); // to generate token
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator');
const gravatar = require('gravatar');
const services = require("../services/render");
const modelproductadd = require("../models/addProduct");
const modeluser = require('../models/signupuser');
const Controller = require("../Controller/Controller");



//home route
route.get("/", function (req, res) {
    res.redirect("3bdo");
})

route.get("/3bdo",services.homeRoutes);


// Result   = object inside mongodb

// route.get("/mainpage/:id", function (req, res) {
//     // res.render("productPage");
//     // const id = req.params.id
//     modelproductadd.findById(req.params.id)
//     .then((result) =>{
//         res.render("productPage",{objproduct:result,stylecss:"/css/ProductPage.css",title:'Product'});
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });
// route.get("/addcart", function (req, res) {
//     // res.render("productPage");
//     // const id = req.params.id
//     modelproductadd.findById(req.params.id)
//     .then((result) =>{
//         res.render("mainpage",{objproduct:result});
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });

// route.get("/mainpage/category", function (req, res) {
//     modelproductadd.find()
//     .then((result) =>{
//         res.render("productpage",{arrproduct:result});
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });

route.get("/signUp", services.signup);
route.get("/signin", services.signin);
route.get("/addproduct", services.addproduct);
route.get("/cart", services.cart);
route.get("/mainpage/category/:category", services.category);
route.get("/profile", services.profile);
route.get("/search", services.seach);
route.get("/signupasseller", services.signupseller);
route.get("/mainpage/:id",services.go_to_productpage);



route.post("/upload_Product_data", (req, res) => {
    const productstore = new modelproductadd(req.body);
    res.json(productstore);
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



// route.post('/signupuser',[
//       // validation
//       check('first_name', 'Name is required').not().isEmpty(),
//       check('second_name', 'Name is required').not().isEmpty(),
//       check('email', 'Please include a valid email').isEmail(),
//       check('password','Please enter a password with 6 or more characters').isLength({
//         min: 6,
//       }),
//     ],
//       async (req, res) => {
//         console.log(req.body)
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//         });
//       }
//       // get name and email and password from request
//       const user = new userdb(req.body);
//     //   const { first_name,second_name, email, password } = req.body;
  
//       try {
//         // Check if user already exist
//         let user = await userdb.findOne({ email });
  
//         // If user exist
//         if (user) {
//           return res.status(400).json({
//             errors: [
//               {
//                 msg: 'User already exists',
//               },
//             ],
//           });
//         }
//         // If not exists
//         // get image from gravatar
//         const avatar = gravatar.url(email, {
//           s: '200', // Size
//           r: 'pg', // Rate,
//           d: 'mm',
//         });
  
//         // create user object
//         user = new User({
//           name,
//           email,
//           avatar,
//           password,
//         });
  
//         // encrypt password
//         const salt = await bcrypt.genSalt(10); // generate salt contains 10
//         // save password
//         user.password = await bcrypt.hash(password, salt); // use user password and salt to hash password
//         //save user in databasw
//         await user.save();
  
//         // payload to generate token
//         const payload = {
//           user: {
//             id: user.id,
//           },
//         };
  
//         jwt.sign(
//           payload,
//           process.env.JWT_SECRET,
//           {
//             expiresIn: 360000, // for development for production it will 3600
//           },
//           (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//           }
//         );
//       } catch (error) {
//         console.log(err.message);
//         res.status(500).send('Server error');
//       }
//     }
//   );
  



// route.post("/signupuser",[
//     // Validation
//     check('first_name','First name is required').not().isEmpty(),
//     check('second_name','Second name is required').not().isEmpty(),
//     check('email','Pleaser enter a valid email').isEmail(),
//     check('password','Please enter a password with 6 or more character').isLength({
//         min:6
//     })

// ],async (req,res)=>{
//     const error =validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({
//             error :error.array()
//         });
//     }
//     const {first_name,second_name,email,password}= req.body;
//     try{
//         let user = await userdb.findOne({email});

//         if(user){
//             return res.status(400).json({
//                 errors:[
//                     {
//                         msg:'user already exists'
//                     },
//                 ],
//             }),
//         }
//     }catch (error){
//         const avatar = gravatar.url(email,{
//             s:'200',
//             r:'pg',
//             d:'mm'
//         })
//     }

// })

// route.post("/signupuser",(req,res)=>{
//     // if(req.body){
//     //     res.status().send('content can not be empty!');
//     //     return
//     // Newv user
//     // const user=user({
//     //     first_name:req.body.first_name,
//     //     second_name:req.body.second_name,
//     //     email:req.body.email,
//     //     phonenumber:req.body.phonenumber,

//     // })

//     // Save user data
//     const productstore = new userdb(req.body);

//     user
//     .save()
//         .then(result => {
//             res.redirect("/addproduct");
//             res.send(console.dir(req.files));
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });
// }

// Uploading the users data in database
// route.post('/api/users'.Controller.create);
// route.get('/api/users'.Controller.fild);
// route.put('/api/users:id'.Controller.update);
// route.delete('/api/users:id'.Controller.delete);




route.use(function (req, res) {
    res.status(404).send("Sorry Not Found");
})



module.exports= route






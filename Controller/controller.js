// var user = require("../models/signupuser");



// // post anew account created by the users informations
// exports.create=(req,res)=>{
//     // Validating request
//     if(req.body){
//         res.status().send('content can not be empty!');
//         return
//     }

//     // Newv user
//     const user=user({
//         first_name:req.body.first_name,
//         second_name:req.body.second_name,
//         email:req.body.email,
//         phonenumber:req.body.phonenumber,

//     })

//     // Save user data
//     user
//     .save(user)
//     .then(data=>{
//         res.send(data)
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message||"Some error accourd"
//         })
//     })
// }

// // retrieve the account informations  
// exports.find=(req,res)=>{
    
// }



// // update the account information in database or by user 
// exports.update=(req,res)=>{
    
// }




// // delete the account permanetaly
// exports.delete=(req,res)=>{
    
// }




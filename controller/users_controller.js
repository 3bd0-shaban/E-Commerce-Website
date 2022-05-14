var users = require('../models/users');
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
// const { forwardAuthenticated } = require('../config/auth');
// create and save new user
exports.create = (req, res) => {
    // if(!req.body){
    //     req.flash('success_msg','Your acount registered successfully');
    // }

    // // new user
    // const user = new users({
    //     first_name : req.body.first_name,
    //     second_name : req.body.second_name,
    //     email : req.body.email,
    //     password : req.body.password,
    // })

    // // save user in the database
    // user
    //     .save(user)
    //     .then(user => {
    //         req.flash('success_msg','You are now registered and can log in');
    //         res.redirect("/register");
    //     })
    //     .catch(err =>{
    //         res.status(500).send({
    //             message : err.message || "Some error occurred while creating a create operation"
    //         });
    //     });
    const { first_name, second_name, email, password, password2, phonenumber, district, apartment, country, state, card_name, zipcode, card_number, card_expire, cvv } = req.body;
    let errors = [];

    if (!first_name || !second_name || !email || !password || !password2 || !phonenumber || !district || !apartment || !zipcode || !country || !state || !card_number || !card_expire || !cvv || !card_name ) {
        errors.push({ msg: 'Please enter all fields' });
    }

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            stylecss: '', title: 'Rigster',errors,first_name,second_name,email,password,password2,phonenumber,district,apartment,country,state,card_name,zipcode,card_number,card_expire,cvv
        });
    } else {
        users.findOne({ email: email }).then(user => {
            if (user) {
                errors.push({ msg: 'Email already exists' });
                res.render('register', {
                    stylecss: '', title: 'Rigster',
                    errors,first_name,second_name,email,password,password2,phonenumber,district,apartment,country,state,card_name,zipcode,card_number,card_expire,cvv
                });
            } else {
                const newUser = new users({
                    first_name,second_name,email,password,phonenumber,district,apartment,country,state,card_name,zipcode,card_number,card_expire,cvv
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can log in');
                                res.redirect('/');
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        users.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        users.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }


}

// Update a new idetified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
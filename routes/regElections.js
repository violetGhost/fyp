var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// add a new 
router.post('/add', function(req, res, next) {    

let election_name = req.body.election_name;
let errors = false;

if(election_name.length === 0) {
    errors = true;

    // set flash message
    req.flash('error', "Please enter election name");
    // render to add.ejs with flash message
    /*res.render('regElections/add', {
        election_name: election_name
    })*/
}

// if no error
if(!errors) {

    var form_data = {
        election_name: election_name
    }
    
    // insert query
    dbConn.query('INSERT INTO election SET ?', form_data, function(err, result) {
        //if(err) throw err
        if (err) {
            req.flash('error', err)
             
            // render to add.ejs
            /*res.render('regElections/add', {
                election_name: form_data.election_name                   
            })*/
        } else {                
            req.flash('success', 'Election successfully added');
            res.redirect('/regElections');
        }
    })
}
})
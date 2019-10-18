const express = require('express');
const donorRoutes = express.Router();
const MD5 = require('md5');
// Require Donor model in our routes module  
let Donor = require('../models/Donor');
// Defined store route  
donorRoutes.route('/add').post(function (req, res) {
  let donor = new Donor(req.body);
  donor.save()
    .then(donor => {
      console.log(donor.Donor_ID);
      res.status(200).json({ "Donor_ID": donor["Donor_ID"] });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined login
donorRoutes.route('/login').post(function (req, res) {
    var Donor_ID = req.body.Donor_ID;
    var Password = req.body.Password;
    if (Donor_ID.length > 0 && Donor_ID.length > 0) {
      Donor.findOne({ Donor_ID: Donor_ID, Password: Password }, function (err, donor) {
        if (err) {
          res.json({ status: 0, message: err });
        }
        if (!donor) {
          console.log("Not success");
          res.redirect('/donor/login');
          return res.status(400).end();
        }
        console.log("success");
        res.location('/donor/home');
        return res.json(donor);
      })
    } else {
          console.log("Not success11");
          return res.end();
    }
  });
module.exports = donorRoutes; 
const express = require('express');
const app = express();
const adminRoutes = express.Router();
let Admin = require('../models/Admin');
let Doctor=require('../models/Doctor');
let LabTechy=require('../models/LabTechy');
//add Doctor
adminRoutes.route('/add').post(function (req, res) {
  let doctor = new Doctor(req.body);
  doctor.save()
    .then(doctor => {
      res.status(200).json({"Doctor_ID":doctor["Doctor_ID"]});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
adminRoutes.route('/add/labtechy').post(function (req, res) {
  let labtechy = new LabTechy(req.body);
  labtechy.save()
    .then(labtechy => {
      res.status(200).json({"Technician_ID":labtechy["Technician_ID"]});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
//get Doctor
adminRoutes.route('/').get(function (req, res) {  
  Doctor.find(function (err, doctors){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(doctors);  
    }  
  });  
});
// Defined login
adminRoutes.route('/login').post(function (req, res) {
    var AdminID = req.body.AdminID;
    var Password = req.body.Password;
    if (AdminID.length > 0 && AdminID.length > 0) {
      Admin.findOne({ AdminID: AdminID, Password: Password }, function (err, admin) {
        if (err) {
          res.json({ status: 0, message: err });
        }
        if (!admin) {
          console.log("Not success");
          res.redirect('/admin/login');
          return res.status(400).end();
        }
        console.log("success");
        res.location('/admin');
        return res.status(200).end();
      })
    } else {
          console.log("Not success11");
          return res.end();
    }
  });
  
  module.exports = adminRoutes;  
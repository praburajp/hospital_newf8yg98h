const express = require('express');
const labtechyRoutes = express.Router();
let LabTechy = require('../models/LabTechy');
let Labrequest = require('../models/Labrequest');
// Defined login
labtechyRoutes.route('/lab/login').post(function (req, res) {
  var Technician_ID = req.body.Technician_ID;
  var Password = req.body.Password;
  if (Technician_ID.length > 0 && Technician_ID.length > 0) {
    LabTechy.findOne({ Technician_ID: Technician_ID, Password: Password }, function (err, labtechy) {
      if (err) {
        res.json({ status: 0, message: err });
      }
      if (!labtechy) {
        console.log("Not success");
        return res.status(400).end();
      }
      console.log("success");
      res.json(labtechy);
    })
  } else {
    console.log("Not success11");
    return res.end();
  }
});
labtechyRoutes.route('/request').get(function (req, res) {
  Labrequest.find(function (err, test){
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(test);  
    }  
  });
});
  module.exports = labtechyRoutes; 
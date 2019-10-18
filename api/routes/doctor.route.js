const express = require('express');
const doctorRoutes = express.Router();
let Doctor = require('../models/Doctor');
let Diagnosis = require('../models/Diagnosis');
let Prescription = require('../models/Prescription');
let Labrequest = require('../models/Labrequest');
// Defined Add Prescription
doctorRoutes.route('/pres-add').post(function (req, res) {
  let prescription = new Prescription(req.body);
  prescription.save()
    .then(prescription => {
      res.status(200).json({ 'Prescription ': 'Prescription has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined login
doctorRoutes.route('/login').post(function (req, res) {
  var Doctor_ID = req.body.Doctor_ID;
  var Password = req.body.Password;
  if (Doctor_ID.length > 0 && Doctor_ID.length > 0) {
    Doctor.findOne({ Doctor_ID: Doctor_ID, Password: Password }, function (err, doctor) {
      if (err) {
        res.json({ status: 0, message: err });
      }
      if (!doctor) {
        console.log("Not success");
        res.redirect('/doctor/login');
        return res.status(400).end();
      }
      console.log("success");
      res.location('/doctors');
      return res.json(doctor);
    })
  } else {
        console.log("Not success11");
        return res.end();
  }
});
//get Prescription
doctorRoutes.route('/').get(function (req, res) {  
  Prescription.find(function (err, prescription){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(prescription);  
    }  
  });  
});
// Defined Add Diagnosis
doctorRoutes.route('/diag-add').post(function (req, res) {
  let diagnosis = new Diagnosis(req.body);
  diagnosis.save()
    .then(diagnosis => {
      res.status(200).json({ 'Diagnosis ': 'Diagnosis report has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined Add Lab request
doctorRoutes.route('/lab-add').post(function (req, res) {
  let labrequest = new Labrequest(req.body);
  labrequest.save()
    .then(labrequest => {
      res.status(200).json({ 'LabRequest ': 'Lab Request has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
module.exports = doctorRoutes; 
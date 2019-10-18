const express = require('express');
const productRoutes = express.Router();
const MD5 = require('md5');
// Require Product model in our routes module  
let Product = require('../models/Product');
// Defined store route  
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      console.log(product.Patient_ID);
      res.status(200).json({ "Patient_ID": product["Patient_ID"] });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route  
productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});
// Defined edit route  
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});
//  Defined update route  
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;
      product.save().then(product => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route  
productRoutes.route('/delete/:id').get(function (req, res) {
  Product.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined login
productRoutes.route('/login').post(function (req, res) {
  var Patient_ID = req.body.Patient_ID;
  var Password = req.body.Password;
  if (Patient_ID.length > 0 && Patient_ID.length > 0) {
    Product.findOne({ Patient_ID: Patient_ID, Password: Password }, function (err, product) {
      if (err) {
        res.json({ status: 0, message: err });
      }
      if (!product) {
        console.log("Not success");
        res.redirect('/patient/login');
        return res.status(400).end();
      }
      else{
      console.log("success");
      res.location('/patient');
      return res.json(product);
      }
    })
  } else {
        console.log("Not success11");
        return res.end();
  }
});
module.exports = productRoutes;  
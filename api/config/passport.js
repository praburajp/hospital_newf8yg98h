const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

let Product = require('../models/Product');

passport.use(new LocalStrategy({
    MobileNumber: 'user[MobileNumber]',
  PasswordField: 'user[Password]',
}, (MobileNumber, Password, done) => {
    Product.findOne({ MobileNumber })
    .then((user) => {
      if(!user || !user.validatePassword(Password)) {
        return done(null, false, { errors: { 'MobileNumber or Password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));
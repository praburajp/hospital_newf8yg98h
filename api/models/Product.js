const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
// Define collection and schema for Product  
let Product = new Schema({
  FullName: {
    type: String
  },
  MobileNumber: {
    type: Number
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  },
  DOB: {
    type: Date
  },
  Address: {
    type: String
  },
  Address2: {
    type: String
  },
  Country: {
    type: String
  },
  State: {
    type: String
  },
  Pincode: {
    type: String
  },
  createdDate: { type: Date, default: Date.now }
}, {
  collection: 'Patient'
});
Product.plugin(AutoIncrement, { inc_field: 'Patient_ID', start_seq: 10000 });
module.exports = mongoose.model('Patient', Product);  
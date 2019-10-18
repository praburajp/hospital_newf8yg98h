const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
// Define collection and schema for Product  
let Donor = new Schema({
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
  B_group: {
    type: String
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
  collection: 'Donor'
});
Donor.plugin(AutoIncrement, { inc_field: 'Donor_ID', start_seq: 5555 });
module.exports = mongoose.model('Donor', Donor);  
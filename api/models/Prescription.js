const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define collection and schema for Product  
let Prescription = new Schema({
  Patient_ID: {
    type: Number
  },
  Medicine: {
    Medicine1: String,
    Quantity: Number,
    Times: {
      time1: { type: String },
      time2: { type: String },
      time3: { type: String },
      time4: { type: String }
    }
  },
  createdDate: { type: Date, default: Date.now }
}, {
  collection: 'Prescription'
});
Prescription.plugin(AutoIncrement, { inc_field: 'Prescription_ID', start_seq: 7000 });
module.exports = mongoose.model('Prescription', Prescription);  
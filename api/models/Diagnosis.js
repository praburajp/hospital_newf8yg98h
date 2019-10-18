const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define collection and schema for Product  
let Diagnosis = new Schema({  
    Patient_ID: {  
        type: String  
      },
      Report: {  
        type: String  
      },
      createdDate: { type: Date, default: Date.now }
    },{  
    collection: 'Diagnosis'  
});  
Diagnosis.plugin(AutoIncrement, {inc_field: 'Report_ID',start_seq:300});
module.exports = mongoose.model('Diagnosis', Diagnosis);  
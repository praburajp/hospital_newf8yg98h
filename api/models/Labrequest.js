const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
var DateOnly = require('mongoose-dateonly')(mongoose);
// Define collection and schema for Product  
let Labrequset = new Schema({
    Patient_ID: {
        type: String
    },
    Test1: {
        type: String
    },
    Status:{
        type:Boolean,
        default:false
    },
    createdDate: {
        type:Date,  
        default: Date
    }
}, {
    collection: 'Labrequset'
});
Labrequset.plugin(AutoIncrement, { inc_field: 'Lab_Request_ID', start_seq: 20000 });
module.exports = mongoose.model('Labrequset', Labrequset);  
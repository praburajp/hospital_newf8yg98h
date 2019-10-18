const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define collection and schema for Product  
let Labtests = new Schema(
    {
        Patient_ID: String,
        avatar: {
            type: Array
        },
        createdDate: { type: Date, default: Date.now }
    },
    {
        collection: 'Labtest'
    });
Labtests.plugin(AutoIncrement, { inc_field: 'Labtest_ID', start_seq: 8000 });
module.exports = mongoose.model('Labtest', Labtests);  
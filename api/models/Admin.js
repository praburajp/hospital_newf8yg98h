const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Admin = new Schema({  
    AdminID: {  
        type: String  
      },
      Password: {  
        type: String  
      },
      createdDate: { type: Date, default: Date.now }
    },{  
    collection: 'Admin'  
});  
module.exports = mongoose.model('Admin', Admin);  
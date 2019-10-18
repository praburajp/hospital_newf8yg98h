const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define collection and schema for Product  
let LabTechy = new Schema({  
    FullName: {  
        type: String  
      },  
      MobileNumber: {  
        type: String  
      },
      Email: {  
        type: String  
      },  
      Qualification1: {  
        type: String  
      },
      Qualification2: {  
        type: String  
      }, 
      Experience: {  
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
      Password: {  
        type: String,
        default:"labtech"
      },
      createdDate: { type: Date, default: Date.now }
    },{  
    collection: 'LabTechy'  
});  
LabTechy.plugin(AutoIncrement, {inc_field: 'Technician_ID',start_seq:3000});
module.exports = mongoose.model('LabTechy', LabTechy);  
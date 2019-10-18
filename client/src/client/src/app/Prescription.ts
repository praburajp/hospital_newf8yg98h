export class Prescription { 
    Patient_ID:Number;
    Medicine:{
        Medicine1:String;
        Quantity:Number;
        Times:{
            time1:Boolean;
            time2:Boolean;
            time3:Boolean;
            time4:Boolean;
        }
    };
    Prescription_ID:Number;
    createdDate:Date;
    } 
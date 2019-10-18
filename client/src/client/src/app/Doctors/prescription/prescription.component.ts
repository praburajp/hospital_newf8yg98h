import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../../Services/doctor.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styles: []
})
export class PrescriptionComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: DoctorService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({   
      PatientID: ['', Validators.required ],  
      Medicine: {
        Medicine1:['', Validators.required ],
        Quantity:['', Validators.required ],
        Times:{
          time1:['', Validators.required ],
          time2:['', Validators.required ],
          time3:['', Validators.required ],
          time4:['', Validators.required ],
        }
      } 
    });  
  }
  addPrescription(PatientID, Medicine)
  {
    this.ps.addPrescription(PatientID, Medicine)
    console.log(Medicine);
  }
  ngOnInit() {
  }

}

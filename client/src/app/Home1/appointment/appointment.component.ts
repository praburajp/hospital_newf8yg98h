import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styles: [`* {
    box-sizing: border-box;
  }
  .container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  
  .container .content {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }`]
})
export class AppointmentComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: PatientsService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      FullName: ['', Validators.required ],  
      MobileNumber: ['', Validators.required ],  
      Email: ['', Validators.required ],
      Password: ['', Validators.required ],
      DOB: ['', Validators.required ],
      Address: ['', Validators.required ],  
      Address2: ['', Validators.required ],  
      Country: ['', Validators.required ],  
      State: ['', Validators.required ], 
      Pincode: ['', Validators.required ]   
    });  
  }  
  ngOnInit() {
  }

}

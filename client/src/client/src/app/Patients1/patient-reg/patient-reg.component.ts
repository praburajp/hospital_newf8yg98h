import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientsService } from '../../Services/patients.service';

@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class PatientRegComponent implements OnInit {
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
      Gender: ['', Validators.required ],
      Password: ['', Validators.required ],
      DOB: ['', Validators.required ],
      Address: ['', Validators.required ],  
      Address2: ['', Validators.required ],  
      Country: ['', Validators.required ],  
      State: ['', Validators.required ], 
      Pincode: ['', Validators.required ]   
    });  
  }  
  addProduct(FullName, MobileNumber, Email, Gender,Password,DOB,Address, Address2, Country, State, Pincode) {  
    this.ps.addProduct(FullName, MobileNumber, Email,Gender, Password, DOB,Address, Address2, Country, State, Pincode);  
  }  
  ngOnInit() {  
  }  
}  
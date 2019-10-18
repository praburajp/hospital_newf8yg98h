import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientsService } from '../../Services/patients.service';

@Component({
  selector: 'app-patient-log',
  templateUrl: './patient-log.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class PatientLogComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: PatientsService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      Patient_ID: ['', Validators.required ],  
      Password: ['', Validators.required ]
    });  
  }  
  validatePatient(Patient_ID,Password)
  {
    this.ps.validatePatient(Patient_ID,Password);
  }
  ngOnInit() {
  }

}

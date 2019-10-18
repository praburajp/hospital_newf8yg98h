import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../../Services/doctor.service';

@Component({
  selector: 'app-doctor-log',
  templateUrl: './doctor-log.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class DoctorLogComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: DoctorService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      Doctor_ID: ['', Validators.required ],  
      Password: ['', Validators.required ]
    });  
  }  
  validateDoctor(Doctor_ID,Password)
  {
    this.ps.validateDoctor(Doctor_ID,Password);
  }
  ngOnInit() {
  }
}

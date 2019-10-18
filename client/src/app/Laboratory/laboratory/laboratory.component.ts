import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LabService } from 'src/app/Services/lab.service';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class LaboratoryComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: LabService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      Technician_ID: ['', Validators.required ],  
      Password: ['', Validators.required ]
    });  
  }  
  validateTechy(Technician_ID,Password)
  {
    this.ps.validateTechy(Technician_ID,Password);
  }
  ngOnInit() {
  }

}
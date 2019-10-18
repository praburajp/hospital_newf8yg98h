import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Prescription';
import { DoctorService } from 'src/app/Services/doctor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class PharmacyComponent implements OnInit {
  angForm: FormGroup;
  prescription: Prescription[];
  Prescription_ID:Number;
  Medicine:String;
  Patient_ID:Number;
  Date:Date;
  show: boolean = false;  
  constructor(private fb: FormBuilder,
    private ps:DoctorService) {
    this.createForm();
   }
   createForm() {  
    this.angForm = this.fb.group({   
      Patient_ID: ['', Validators.required ]   
    });  
  }
  getPrescription(Patient_ID) {
   
  }
  ngOnInit() {
    this.ps
      .getpres()
      .subscribe((res: Prescription[]) => {
        this.prescription = res;
      });
  }
}

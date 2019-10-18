import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class AddDoctorComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: AdminService) {  
    this.createForm();   
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      FullName: ['', Validators.required ],  
      MobileNumber: ['', Validators.required ],  
      Email: ['', Validators.required ],
      Qualification1: ['', Validators.required ],
      Qualification2: ['', Validators.required ],
      Experience: ['', Validators.required ],
      Address: ['', Validators.required ],  
      Address2: ['', Validators.required ],  
      Country: ['', Validators.required ],  
      State: ['', Validators.required ], 
      Pincode: ['', Validators.required ]   
    });  
  }
  addDoctor(FullName, MobileNumber, Email,Qualification1,Qualification2,Experience,Address,Address2,Country,State,Pincode)
  {
    this.ps.addDoctor(FullName, MobileNumber, Email,Qualification1,Qualification2,Experience,Address,Address2,Country,State,Pincode)
  }
  ngOnInit() {
  }

}

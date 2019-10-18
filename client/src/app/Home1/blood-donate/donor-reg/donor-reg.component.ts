import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DonorService } from 'src/app/Services/donor.service';

@Component({
  selector: 'app-donor-reg',
  templateUrl: './donor-reg.component.html',
  styles: []
})
export class DonorRegComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps:DonorService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      FullName: ['', Validators.required ],  
      MobileNumber: ['', Validators.required ],  
      Email: ['', Validators.required ],
      Gender: ['', Validators.required ],
      Password: ['', Validators.required ],
      B_group: ['', Validators.required ],
      DOB: ['', Validators.required ],
      Address: ['', Validators.required ],  
      Address2: ['', Validators.required ],  
      Country: ['', Validators.required ],  
      State: ['', Validators.required ], 
      Pincode: ['', Validators.required ]   
    });  
  }  
  addDonor(FullName, MobileNumber, Email, Gender,Password,B_group,DOB,Address, Address2, Country, State, Pincode) {  
    this.ps.addDonor(FullName, MobileNumber, Email,Gender, Password,B_group, DOB,Address, Address2, Country, State, Pincode);  
  }  
  ngOnInit() {
  }

}

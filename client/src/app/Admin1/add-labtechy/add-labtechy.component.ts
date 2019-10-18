import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-labtechy',
  templateUrl: './add-labtechy.component.html',
  styles: []
})
export class AddLabtechyComponent implements OnInit {
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
  addTechy(FullName, MobileNumber, Email,Qualification1,Qualification2,Experience,Address,Address2,Country,State,Pincode)
  {
    this.ps.addTechy(FullName, MobileNumber, Email,Qualification1,Qualification2,Experience,Address,Address2,Country,State,Pincode)
  }
  ngOnInit() {
  }

}

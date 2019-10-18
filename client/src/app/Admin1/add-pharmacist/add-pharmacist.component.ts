import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-pharmacist',
  templateUrl: './add-pharmacist.component.html',
  styles: []
})
export class AddPharmacistComponent implements OnInit {
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
  ngOnInit() {
  }

}

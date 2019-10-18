import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [`input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}`]
})
export class AdminComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: AdminService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      AdminID: ['', Validators.required ],  
      Password: ['', Validators.required ]
    });  
  }  
  validateAdmin(AdminID,Password)
  {
    this.ps.validateAdmin(AdminID,Password);
  }
  ngOnInit() {
  }

}

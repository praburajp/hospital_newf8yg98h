import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-labtests',
  templateUrl: './labtests.component.html',
  styles: []
})
export class LabtestsComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: DoctorService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      Patient_ID: ['', Validators.required ],  
      Test1: ['', Validators.required ]
    });  
  }  
  TestRequest() {
    if (this.angForm.valid) {
      console.log("Lab Test Request", this.angForm.value);
      this.ps.TestRequest(this.angForm.value["Patient_ID"],this.angForm.value["Test1"]);
    }
  }
  ngOnInit() {
  }

}

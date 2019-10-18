import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DoctorService } from '../../Services/doctor.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styles: []
})
export class DiagnosisComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private ps: DoctorService) {
    this.angForm = this.fb.group({
      Patient_ID: ['', Validators.required],
      Report: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  addDiagnosis() {
    if (this.angForm.valid) {
      console.log("User Registration Form Submit", this.angForm.value);
      this.ps.addDiagnosis(this.angForm.value["Patient_ID"],this.angForm.value["Report"]);
    }
  }
}  
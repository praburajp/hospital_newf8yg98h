import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LabService } from 'src/app/Services/lab.service';
import { Labrequest } from 'src/app/labrequest';

@Component({
  selector: 'app-lab-view',
  templateUrl: './lab-view.component.html',
  styles: []
})
export class LabViewComponent implements OnInit {
  angForm: FormGroup;
  labrequest: Labrequest[];
  Lab_Request_ID:Number;
  Test1:String;
  Patient_ID1:Number;
  Date:Date;
  show: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ps: LabService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Patient_ID: ['', Validators.required]
    });
  }
  getrequest1(Patient_ID) {
    for (var key in this.labrequest) {
      if (this.labrequest.hasOwnProperty(key)) {
        if (this.labrequest[key].Patient_ID == Patient_ID) {
          this.Lab_Request_ID=this.labrequest[key].Lab_Request_ID;
          this.Test1=this.labrequest[key].Test1;
          this.Patient_ID1=this.labrequest[key].Patient_ID;
          this.Date=this.labrequest[key].createdDate;
          this.show=true;
          console.log(this.Lab_Request_ID);
          console.log(this.Test1);
          console.log(this.Patient_ID1);
          break;
        }
      }
    }
  }
  ngOnInit() {
    this.ps
      .getrequest()
      .subscribe((res: Labrequest[]) => {
        this.labrequest = res;
      });
  }
}

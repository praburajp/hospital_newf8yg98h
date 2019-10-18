import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { Doctors } from '../../Doctors';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {
  doctors: Doctors[];  
  constructor(private ps:AdminService) { }

  ngOnInit() {
    this.ps  
      .getDoctors()  
      .subscribe((res: Doctors[]) => {  
        this.doctors = res;  
    });  
  }

}

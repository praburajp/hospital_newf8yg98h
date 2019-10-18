import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/Doctors';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  doctors: Doctors[];  
  constructor(private ps:AdminService) { }

  ngOnInit() {
    this.ps  
      .getDoctors()  
      .subscribe((data: Doctors[]) => {  
        this.doctors = data;  
    });  
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styles: []
})
export class PatientsComponent implements OnInit {
  constructor(private router: Router) { }
  onLogout(){
    this.router.navigate(['/patient/login']);
  }
  ngOnInit() {
  }

}

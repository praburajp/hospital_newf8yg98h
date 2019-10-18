import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styles: []
})
export class AdminProfileComponent implements OnInit {
  constructor(private router: Router) { }
  onLogout(){
    this.router.navigate(['/admin/login']);
  }
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Doctors } from '../Doctors';
import { LabTechy } from '../LabTechy';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  doctors: Doctors[];
  techy: LabTechy[];
  uri = 'http://localhost:4000/admin';
  constructor(private http: HttpClient,
    private router: Router) { }
  addDoctor(FullName, MobileNumber, Email, Qualification1, Qualification2, Experience, Address, Address2, Country, State, Pincode) {
    const obj = {
      FullName, MobileNumber, Email, Qualification1, Qualification2, Experience, Address, Address2, Country, State, Pincode
    };

    this.http.post(`${this.uri}/add`, obj)
      .subscribe((res: Doctors[]) => {
        this.doctors = res;
        alert("Doctor ID:" + this.doctors["Doctor_ID"]);
      });

    alert("Doctor details added succesffuly!!");
    this.router.navigate(['admin']);
  }
  addTechy(FullName, MobileNumber, Email, Qualification1, Qualification2, Experience, Address, Address2, Country, State, Pincode) {
    const obj = {
      FullName, MobileNumber, Email, Qualification1, Qualification2, Experience, Address, Address2, Country, State, Pincode
    };

    this.http.post(`${this.uri}/add/labtechy`, obj)
      .subscribe((res: LabTechy[]) => {
        this.techy = res;
        alert("Technician ID:" + this.techy["Technician_ID"]);
      });
    alert("Technician details added succesffuly!!");
    this.router.navigate(['admin']);
  }
  getDoctors() {
    return this
      .http
      .get(`${this.uri}`);
  }
  validateAdmin(AdminID, Password) {
    const obj = {
      AdminID, Password
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
      .subscribe(res => {
        this.router.navigateByUrl('/admin');
      },
        err => {
          alert("Invalid Credentials!!");
          this.router.navigateByUrl('/admin/login');
        }
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import Product from '../Product';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Product[];  
  uri = 'http://localhost:4000/patients';
  constructor(private http: HttpClient,
    private router: Router) { }


  addProduct(FullName, MobileNumber, Email,Gender, Password,DOB, Address, Address2, Country, State, Pincode) {
    const obj = {
      FullName, MobileNumber, Email, Password,Gender, Address,DOB, Address2, Country, State, Pincode
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe((res:Product[]) =>
      {
        this.patients=res;
        alert("Patient ID:"+this.patients["Patient_ID"]);
      });
      alert("Patient Registered Successfully!!");
    this.router.navigate(['patient/login']);
  }
  validatePatient(Patient_ID, Password) {
    const obj = {
      Patient_ID, Password
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
      .subscribe((res: Product[]) => {
        this.patients = res;
        alert("Welcome " + this.patients["FullName"]);
        this.router.navigateByUrl('/patients');
      },
        err => {
          alert("Invalid Credentials!!");
          this.router.navigateByUrl('/patient/login');
        }
      );
  }
}

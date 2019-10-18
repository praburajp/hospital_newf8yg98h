import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { Doctors } from '../Doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors: Doctors[];
  uri = 'http://localhost:4000/doctors';
  constructor(private http: HttpClient,
    private router: Router) { }
  validateDoctor(Doctor_ID, Password) {
    const obj = {
      Doctor_ID, Password
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
      .subscribe((res: Doctors[]) => {
        this.doctors = res;
        alert("Welcome " + this.doctors["FullName"]);
        this.router.navigateByUrl('/doctors');
      },
        err => {
          alert("Invalid credentials!!");
          this.router.navigateByUrl('/doctor/login');
        }
      );
  }
  addDiagnosis(Patient_ID,Report) {
    const obj = {
      Patient_ID, Report
    };
    console.log(obj);
    this.http.post(`${this.uri}/diag-add`, obj)
      .subscribe(res => console.log('Done'));
    this.router.navigate(['doctors']);
  }
  addPrescription(Patient_ID, Medicine) {
    const obj = {
      Patient_ID, Medicine
    };
    console.log(obj);
    this.http.post(`${this.uri}/pres-add`, obj)
      .subscribe(res => console.log('Done'));
    this.router.navigate(['doctors']);
  }
  TestRequest(Patient_ID,Test1)
  {
    const obj={Patient_ID,Test1};
    this.http.post(`${this.uri}/lab-add`, obj)
      .subscribe(res => console.log('Done'));
      alert("Test Report requested succesfully!!");
    this.router.navigate(['labtests']);
  }
  getpres() {
    return this
      .http
      .get(`${this.uri}/pres-get`);
  }
}

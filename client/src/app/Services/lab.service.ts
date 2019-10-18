import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Labrequest } from '../labrequest';
import Donor from '../Donor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  labrequest: Labrequest[];
  donor:Donor[];
uri = 'http://localhost:4000/lab';
  constructor(private http: HttpClient,
    private router: Router) { }
  validateTechy(Technician_ID, Password) {
    const obj = {
      Technician_ID, Password
    };
    console.log(obj);
    this.http.post(`${this.uri}/lab/login`, obj)
      .subscribe(res => {
        this.router.navigateByUrl('/lab/home');
      },
        err => {
          alert("Invalid Credentials!!");
          this.router.navigateByUrl('laboratory/login');
        }
      );
  }
  addLabtest(FullName, MobileNumber, Email,Gender, Password,B_group, DOB,Address, Address2, Country, State, Pincode)
  {
    const obj={
      FullName, MobileNumber, Email,Gender, Password,B_group, DOB,Address, Address2, Country, State, Pincode
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe((res:Donor[]) =>
      {
        this.donor=res;
        alert("Donor ID:"+this.donor["Donor_ID"]);
      });
      alert("Donor Registered Successfully!!");
    this.router.navigate(['donor/login']);
  }
  getrequest() {
    return this
      .http
      .get(`${this.uri}/request`);
  }
  addNewProfile(form): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json, text/plain'
      })
    };
    return (this.http.post<any>('http://localhost:3000/addNewUser', form, httpOptions));
  }
}

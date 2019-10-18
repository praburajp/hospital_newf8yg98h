import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Donor from '../Donor';
@Injectable({
    providedIn: 'root'
})
export class DonorService {
    donor: Donor[];
    uri = 'http://localhost:4000/donor';
    constructor(private http: HttpClient,
        private router: Router) { }
    addDonor(FullName, MobileNumber, Email, Gender, Password, B_group, DOB, Address, Address2, Country, State, Pincode) {
        const obj = {
            FullName, MobileNumber, Email, Gender, Password, B_group, DOB, Address, Address2, Country, State, Pincode
        };
        console.log(obj);
        this.http.post(`${this.uri}/add`, obj)
            .subscribe((res: Donor[]) => {
                this.donor = res;
                console.log(this.donor);
                alert("Donor ID:" + this.donor["Donor_ID"]);
            });
        alert("Donor Registered Successfully!!");
        this.router.navigate(['donor/login']);
    }
    validateDonor(Donor_ID, Password) {
        const obj = {
            Donor_ID, Password
        };
        console.log(obj);
        this.http.post(`${this.uri}/login`, obj)
          .subscribe((res: Donor[]) => {
            this.donor = res;
            alert("Welcome " + this.donor["FullName"]);
            this.router.navigateByUrl('/donor/home');
          },
            err => {
              alert("Invalid credentials!!");
              this.router.navigateByUrl('/donor/login');
            }
          );
      }
}

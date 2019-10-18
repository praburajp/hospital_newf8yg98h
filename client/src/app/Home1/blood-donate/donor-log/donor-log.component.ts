import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DonorService } from 'src/app/Services/donor.service';

@Component({
  selector: 'app-donor-log',
  templateUrl: './donor-log.component.html',
  styles: []
})
export class DonorLogComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder,
    private ps: DonorService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({    
      Donor_ID: ['', Validators.required ],  
      Password: ['', Validators.required ]
    });  
  }  
  validateDonor(Donor_ID,Password)
  {
    this.ps.validateDonor(Donor_ID,Password);
  }
  ngOnInit() {
  }

}

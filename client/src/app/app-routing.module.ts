import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegComponent } from './Patients1/patient-reg/patient-reg.component';
import { PatientLogComponent } from './Patients1/patient-log/patient-log.component';
import { HomeComponent } from './Home1/home/home.component';
import { PatientsComponent } from './Patients1/patients/patients.component';
import { DoctorLogComponent } from './Doctors/doctor-log/doctor-log.component';
import { AdminComponent } from './Admin1/admin/admin.component';
import { AdminProfileComponent } from './Admin1/admin-profile/admin-profile.component';
import { AppointmentComponent } from './Home1/appointment/appointment.component';
import { AddDoctorComponent } from './Admin1/add-doctor/add-doctor.component';
import { DoctorComponent } from './Doctors/doctor/doctor.component';
import { NuerologyComponent } from './Departments/nuerology/nuerology.component';
import { CardiologyComponent } from './Departments/cardiology/cardiology.component';
import { PhysiotherapyComponent } from './Departments/physiotherapy/physiotherapy.component';
import { ProfileComponent } from './Doctors/profile/profile.component';
import { PrescriptionComponent } from './Doctors/prescription/prescription.component';
import { LabtestsComponent } from './Doctors/labtests/labtests.component';
import { Doctors1Component } from './Doctors/doctors1/doctors1.component';
import { PharmacyComponent } from './Pharmacy/pharmacy/pharmacy.component';
import { AddPharmacistComponent } from './Admin1/add-pharmacist/add-pharmacist.component';
import { AddLabtechyComponent } from './Admin1/add-labtechy/add-labtechy.component';
import { DocMenuComponent } from './Doctors/doc-menu/doc-menu.component';
import { DiagnosisComponent } from './Doctors/diagnosis/diagnosis.component';
import { OrganDonateComponent } from './Home1/organ-donate/organ-donate.component';
import { BloodDonateComponent } from './Home1/blood-donate/blood-donate.component';
import { ContactComponent } from './Home1/contact/contact.component';
import { AboutComponent } from './Home1/about/about.component';
import { LaboratoryComponent } from './Laboratory/laboratory/laboratory.component';
import { LabHomeComponent } from './Laboratory/lab-home/lab-home.component';
import { LabViewComponent } from './Laboratory/lab-view/lab-view.component';
import { LabCreateComponent } from './Laboratory/lab-create/lab-create.component';
import { DonorRegComponent } from './Home1/blood-donate/donor-reg/donor-reg.component';
import { DonorLogComponent } from './Home1/blood-donate/donor-log/donor-log.component';
import { DonorHomeComponent } from './Home1/blood-donate/donor-home/donor-home.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  }, 
  {  
    path: 'home',  
    component: HomeComponent  
  },
  {  
    path: 'admin/login',  
    component: AdminComponent  
  },
  {  
    path: 'patient/create',  
    component: PatientRegComponent  
  },
  {  
    path: 'patient/login',  
    component: PatientLogComponent  
  },
  {  
    path: 'doctor/login',  
    component: DoctorLogComponent  
  },
  {  
    path: 'patients',  
    component: PatientsComponent  
  },
  {  
    path: 'laboratory/login',  
    component: LaboratoryComponent  
  },
  {  
    path: 'lab/home',  
    component: LabHomeComponent  
  },
  {  
    path: 'lab/view',  
    component: LabViewComponent  
  },
  {  
    path: 'lab/create',  
    component: LabCreateComponent  
  },
  {  
    path: 'admin',  
    component: AdminProfileComponent  
  },
  {  
    path: 'appointment',  
    component: AppointmentComponent  
  },
  {  
    path: 'doctor/add',  
    component: AddDoctorComponent  
  },
  {  
    path: 'pharmacy',  
    component: PharmacyComponent  
  },
  {  
    path: 'doctor',  
    component: DoctorComponent  
  },
  {  
    path: 'doctors',  
    component: Doctors1Component  
  },
  {  
    path: 'profile',  
    component: ProfileComponent  
  },
  {  
    path: 'prescription',  
    component: PrescriptionComponent  
  },
  {  
    path: 'labtests',  
    component: LabtestsComponent  
  },
  {  
    path: 'neurology',  
    component: NuerologyComponent  
  },
  {  
    path: 'cardiology',  
    component: CardiologyComponent  
  },
  {  
    path: 'physiotherapy',  
    component: PhysiotherapyComponent  
  },
  {  
    path: 'add/pharmacist',  
    component: AddPharmacistComponent  
  },
  {  
    path: 'add/labtechy', 
    component: AddLabtechyComponent  
  },
  {  
    path: 'doctormenu', 
    component: DocMenuComponent  
  },
  {  
    path: 'diagnosis', 
    component: DiagnosisComponent  
  }
  ,
  {  
    path: 'organ/donate', 
    component: OrganDonateComponent  
  } ,
  {  
    path: 'blood/donate', 
    component: BloodDonateComponent  
  } ,
  {  
    path: 'contact', 
    component: ContactComponent  
  } ,
  {  
    path: 'about', 
    component: AboutComponent  
  },
  {  
    path:'donor/create', 
    component: DonorRegComponent  
  },
  {  
    path:'donor/login', 
    component: DonorLogComponent  
  },
  {  
    path:'donor/home', 
    component: DonorHomeComponent, 
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

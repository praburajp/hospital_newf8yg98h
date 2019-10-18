import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './Services/auth.guard';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegComponent } from './Patients1/patient-reg/patient-reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { PatientsService } from './Services/patients.service';
import { PatientLogComponent } from './Patients1/patient-log/patient-log.component';
import { HomeComponent } from './Home1/home/home.component';
import { PatientsComponent } from './Patients1/patients/patients.component';
import { DoctorLogComponent } from './Doctors/doctor-log/doctor-log.component';
import { AdminComponent } from './Admin1/admin/admin.component';
import { AdminProfileComponent } from './Admin1/admin-profile/admin-profile.component';
import { AppointmentComponent } from './Home1/appointment/appointment.component';
import { AddDoctorComponent } from './Admin1/add-doctor/add-doctor.component';
import { DoctorComponent } from './Doctors/doctor/doctor.component';
import { DoctorService } from './Services/doctor.service';
import { NuerologyComponent } from './Departments/nuerology/nuerology.component';
import { PhysiotherapyComponent } from './Departments/physiotherapy/physiotherapy.component';
import { CardiologyComponent } from './Departments/cardiology/cardiology.component';
import { DepartmentsComponent } from './departments/departments.component';
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
import { AboutComponent } from './Home1/about/about.component';
import { ContactComponent } from './Home1/contact/contact.component';
import { LaboratoryComponent } from './Laboratory/laboratory/laboratory.component';
import { LabHomeComponent } from './Laboratory/lab-home/lab-home.component';
import { LabViewComponent } from './Laboratory/lab-view/lab-view.component';
import { LabCreateComponent } from './Laboratory/lab-create/lab-create.component';
import { DonorRegComponent } from './Home1/blood-donate/donor-reg/donor-reg.component';
import { DonorLogComponent } from './Home1/blood-donate/donor-log/donor-log.component';
import { DonorHomeComponent } from './Home1/blood-donate/donor-home/donor-home.component';
@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    PatientRegComponent,
    PatientLogComponent,
    HomeComponent,
    PatientsComponent,
    DoctorLogComponent,
    AdminComponent,
    AdminProfileComponent,
    AppointmentComponent,
    AddDoctorComponent,
    DoctorComponent,
    NuerologyComponent,
    PhysiotherapyComponent,
    CardiologyComponent,
    DepartmentsComponent,
    ProfileComponent,
    PrescriptionComponent,
    LabtestsComponent,
    Doctors1Component,
    PharmacyComponent,
    AddPharmacistComponent,
    AddLabtechyComponent,
    DocMenuComponent,
    DiagnosisComponent,
    OrganDonateComponent,
    BloodDonateComponent,
    AboutComponent,
    ContactComponent,
    LaboratoryComponent,
    LabHomeComponent,
    LabViewComponent,
    LabCreateComponent,
    DonorRegComponent,
    DonorLogComponent,
    DonorHomeComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [PatientsService,DoctorService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

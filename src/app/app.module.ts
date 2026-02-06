import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { AllCentersComponent } from './all-centers/all-centers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupReservationComponent } from './reservation/popup-reservation/popup-reservation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginRegesterComponent } from './login-regester/login-regester.component';
import { MyReservationComponent } from './my-reservation/my-reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMedicalCenterComponent } from './dashboard/add-medical-center/add-medical-center.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AddNewMedicalCenterComponent } from './dashboard/add-medical-center/add-new-medical-center/add-new-medical-center.component';
import { AddDoctorComponent } from './dashboard/add-medical-center/add-doctor/add-doctor.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AllCentersComponent,
    PopupReservationComponent,
    LoginRegesterComponent,
    MyReservationComponent,
    DashboardComponent,
    AddMedicalCenterComponent,
    AddNewMedicalCenterComponent,
    AddDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     
    ReactiveFormsModule ,
     MatDialogModule ,
     FormsModule,

 // PrimeNG
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
   MatDividerModule,
   MatExpansionModule,
   BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatIconModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

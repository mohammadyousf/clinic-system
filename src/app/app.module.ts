import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { AllCentersComponent } from './all-centers/all-centers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupReservationComponent } from './reservation/popup-reservation/popup-reservation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginRegesterComponent } from './login-regester/login-regester.component';
import { MyReservationComponent } from './my-reservation/my-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AllCentersComponent,
    PopupReservationComponent,
    LoginRegesterComponent,
    MyReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     
    ReactiveFormsModule ,
     MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

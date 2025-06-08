import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { AppComponent } from './app.component';
import { AllCentersComponent } from './all-centers/all-centers.component';
import { LoginRegesterComponent } from './login-regester/login-regester.component';
import { AuthGuard } from './auth/auth.guard'; 
import { MyReservationComponent } from './my-reservation/my-reservation.component';
const routes: Routes = [
  { path: '', component: AllCentersComponent },
  { path: "reservation", component: ReservationComponent,canActivate: [AuthGuard] },
  { path: "login", component:  LoginRegesterComponent},
  {path:"myreservation",component:MyReservationComponent ,canActivate: [AuthGuard]},       
  { path: '**', redirectTo: '' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule {
  
  
}

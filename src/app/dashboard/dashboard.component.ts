import { Component } from '@angular/core';
import { ServiceProjectService } from '../service-project.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  DoctorId: number | null = null;

 constructor(    
    private serviceProjectService:ServiceProjectService,
    private router: Router,
    private tokenService: TokenService,

  ){}
ngOnInit(){
  debugger
    this.DoctorId = Number(this.tokenService.getDoctorId());

  
}
  logout(){
        debugger
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');

      }

}

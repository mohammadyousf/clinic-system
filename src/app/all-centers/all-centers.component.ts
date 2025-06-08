import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProjectService } from '../service-project.service';
import { center } from '../model';
import { state } from '@angular/animations';

@Component({
  selector: 'app-all-centers',
  templateUrl: './all-centers.component.html',
  styleUrl: './all-centers.component.css'
})
export class AllCentersComponent {
  public centers!: center[];
  constructor(    
    private serviceProjectService:ServiceProjectService,
    private router: Router
  ){}

LodingData(){
    
  this.serviceProjectService.getDataCenter().subscribe(res=>{
  debugger
  this.centers=res;

});

 }

 
 gotoreservation(id: number) {
  this.router.navigateByUrl('/reservation', { state: { id: id } });
}


  


  ngOnInit()  {
    this.LodingData();
      }




      Login(){
        
        this.router.navigateByUrl('/login');


      }


      
      logout(){
        debugger
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');

      }
}





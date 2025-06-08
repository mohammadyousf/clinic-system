import { Component } from '@angular/core';
import { ServiceProjectService } from '../service-project.service';
import { Reservation } from './Reservation';
import { TokenService } from '../token.service';
import { PopupReservationComponent } from '../reservation/popup-reservation/popup-reservation.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrl: './my-reservation.component.css'
})
export class MyReservationComponent {
public userid :number | undefined |null


  constructor( private serviceProjectService:ServiceProjectService,
               private tokenService: TokenService,
               private dialog: MatDialog,
                private router: Router,
            
    
  ){}
  public index!: Reservation[];


  ngOnInit(){
    debugger
    this.userid = this.tokenService.getUserId();


    this.lodData(this.userid??0); 
  }

  lodData(userid:number)
{
  debugger
 
  this.serviceProjectService.getDataReservation(userid).subscribe(res=>{
    debugger
    this.index=res;
  
  });




}











  editReservation(id:number) {



      let dialogRef: MatDialogRef<any> = this.dialog.open(PopupReservationComponent, {
        width: '550px',
        disableClose: true,
        data: {idres:id}
      });
      
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          return;
        }
        else {
       
        }
      });
      



  }
  deleteReservation(id: number) {
    debugger
    const confirmed = confirm('هل أنت متأكد من حذف هذا الحجز؟');
    if (confirmed) {
      this.serviceProjectService.DelteReservation(id).subscribe(res => {
        const index = this.index.findIndex(r => r.id === id);
        if (index !== -1) {
          this.index.splice(index, 1);
          this.lodData(this.userid??0); 

        }
      });
    }
  }
  



    
  logout(){
    debugger
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }
  

}

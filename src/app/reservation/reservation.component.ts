import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceProjectService } from '../service-project.service';
import { PopupReservationComponent } from './popup-reservation/popup-reservation.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

public doctor:any;
public id:number | undefined;
public iddoctor:number | undefined;



  issueForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    issueDescription: new FormControl('', Validators.required)
  });


  onSubmit() {

  
    debugger
    if (this.issueForm.valid) {
      console.log(this.issueForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

constructor(

    private serviceProjectService:ServiceProjectService,
    private dialog: MatDialog,
    //private alert: sweetalert,


  
){}




  LodingData(id:number){
    
    this.serviceProjectService.getDataDocotrs(id).subscribe(res=>{
    debugger
    this.doctor=res;
  
  });
  
   }

   ngOnInit()  {
    this.id = history.state.id;
     this.LodingData(this.id??0);
      }

      popup(id:number){

      debugger
      let dialogRef: MatDialogRef<any> = this.dialog.open(PopupReservationComponent, {
        width: '550px',
        disableClose: true,
        
        // panelClass: 'custom-dialog-container',
        
        data: { 
          
          idDoctor: id,
          idCenter:this.id
          
        }
      });
      
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          return;
        }
        else {
       
        }
      });
      



    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medical-center',
  templateUrl: './add-medical-center.component.html',
  styleUrl: './add-medical-center.component.css'
})
export class AddMedicalCenterComponent {

 public DeptList:any[] | undefined;
 public selectDept=-1


public ClincList: any[] = [];

constructor(    private router: Router
){

}

navigateToAddOffer(){

}







 Search(){


  
 }

Addnew() {
this.router.navigateByUrl('/dashboard/addnewmedical', { state: { id: 0 ,isNew:true} });}

}

import { Component, Inject } from '@angular/core';
import { AddNewMedicalCenterComponent } from '../add-new-medical-center/add-new-medical-center.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  DoctorForm: any;



  constructor(
    private formbulider: UntypedFormBuilder,
    public dialogRef: MatDialogRef<AddNewMedicalCenterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ){}
  
    

    ngOnInit(): void {
  
        this.DoctorForm = this.formbulider.group({  
          id:[0],
          nameDoctor:[''],
          email:[''],
          doctorPonNumber:[],
          password:['']
  
        });  
     //  this.loadOfferData()
    
    }


    Submit(){
debugger
this.DoctorForm.controls['nameDoctor'].setValue(this.DoctorForm.get('nameDoctor').value);
this.DoctorForm.controls['email'].setValue(this.DoctorForm.get('email').value);
this.DoctorForm.controls['doctorPonNumber'].setValue(this.DoctorForm.get('doctorPonNumber').value);
this.DoctorForm.controls['password'].setValue(this.DoctorForm.get('password').value);


     this.data.PushDoctorList(this.DoctorForm.value,this.data.row,this.data.isNew);



    }


}

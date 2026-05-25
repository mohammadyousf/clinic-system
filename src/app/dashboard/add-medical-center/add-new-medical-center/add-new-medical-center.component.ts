import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ServiceProjectService } from '../../../service-project.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';

@Component({
  selector: 'app-add-new-medical-center',
  templateUrl: './add-new-medical-center.component.html',
  styleUrl: './add-new-medical-center.component.css'
})
export class AddNewMedicalCenterComponent {
medicalcenterForm:any;
DoctorList: any[] = [];


openAddOfferPopUp(){

}

constructor(        private formbulider: UntypedFormBuilder,
  private serviceProjectService:ServiceProjectService,
          private dialog: MatDialog,


){}
ngOnInit(): void {

  this.medicalcenterForm = this.formbulider.group({ 
      id:[0], 
      namecenter: [''],
      address:[''], 
      email:[''],
      phonnumber:[0]
     
    }); 
     const id = history.state.id;
     
    this.GetData(id);

}




GetData(id:number){

  this.serviceProjectService.GetDataMedicalCenter(id).subscribe(res=>{
    if(id==0){
      debugger
 this.medicalcenterForm.controls['id'].setValue(res.id);
  }
else{


 this.medicalcenterForm.controls['id'].setValue(res.id);
 this.medicalcenterForm.controls['namecenter'].setValue(res.nameCenter);
 this.medicalcenterForm.controls['address'].setValue(res.address);
 this.medicalcenterForm.controls['email'].setValue(res.email);
 this.medicalcenterForm.controls['phonnumber'].setValue(res.phonNumber);
this.DoctorList=res.doctorInfo
}


});  
}
Addnew(isNew:boolean,id:number,crruntrow:any){


debugger
  let title = isNew ? "AddNewDoctor" : "EditDoctor";
  let dialogRef: MatDialogRef<any> = this.dialog.open(AddDoctorComponent, {
    width: '720px',
    disableClose: false,
    data: { title: title, id: id ,row:crruntrow ,isNew
    , DoctorList: this.DoctorList
    , PushDoctorList: (row: any,crruntrow: any,isNew: any) => { this.PushDoctorList(row,crruntrow,isNew)}


    }
    
  })
  dialogRef.afterClosed()
  .subscribe(res => {
            if(!res) {
        return;
      }

})


}



PushDoctorList(row: any,crruntrow: any,isNew: any){
  
  if (isNew) {
        this.DoctorList.push(row);

} else {
    this.DoctorList[this.DoctorList.indexOf(crruntrow)]=row;
}

}



OnSaveForms(){
  
const modelSave={
Id: this.medicalcenterForm.controls['id'].value,
NameCenter: this.medicalcenterForm.controls['namecenter'].value,
Email: this.medicalcenterForm.controls['email'].value,
PhonNumber: this.medicalcenterForm.controls['phonnumber'].value,
Address:this.medicalcenterForm.controls['address'].value,
DoctorInfo:this.DoctorList

}

this.serviceProjectService.SavMedicalCenter(modelSave).subscribe(res=>{
  if(res){
      this.SaveSuccess();


  }
  
  else{
      this.SaveFaild();



  }
})

}

SaveFaild() {
  alert("فشل في الحفظ ❌");
}
SaveSuccess() {
  alert("تم الحفظ بنجاح ✅");
}




refresOfferTable (data:any){
  this.DoctorList =data

}

//delete row  after save
onDelete(row: any) {
  debugger
  const index = this.DoctorList.indexOf(row);
  this.DoctorList.splice(index, 1);
  this.refresOfferTable(this.DoctorList)
}
}

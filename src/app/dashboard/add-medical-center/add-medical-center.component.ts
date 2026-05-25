import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ServiceProjectService } from '../../service-project.service';

@Component({
  selector: 'app-add-medical-center',
  templateUrl: './add-medical-center.component.html',
  styleUrl: './add-medical-center.component.css'
})
export class AddMedicalCenterComponent {

 public DeptList:any[] | undefined;
 public selectDept=-1


public ClincList: any[] = [];

constructor(
    private router: Router,
    private serviceProjectService: ServiceProjectService,
    private confirmationService: ConfirmationService
  ) {

}




ngOnInit(){


  this.GetData()
}



GetData(){
  debugger
this.serviceProjectService.GetAllCenterByadmin(-1).subscribe(res=>{
  this.ClincList=res.informationCenter;
  this.DeptList=res.clincList
})
}

navigateToAddOffer(){

}







 Search(){


  this.serviceProjectService.GetAllCenterByadmin(this.selectDept).subscribe(res=>{
  this.ClincList=res.informationCenter;
})
 }

Addnew(id:number) {
  this.router.navigateByUrl('/dashboard/addnewmedical', { state: { id: id ,isNew:true} });
}

edit(){}

/**
 * Deletes a center by ID after user confirmation
 * @param id - The ID of the center to be deleted
 */
delete(id: number) {
  this.confirmationService.confirm({
    key: 'deleteDialog',
    message: 'هل أنت متأكد أنك تريد حذف هذا المركز؟ لا يمكن التراجع عن هذه العملية.',
    header: 'تأكيد الحذف', // إضافة عنوان يعطي شكلاً أفضل
    icon: 'pi pi-exclamation-triangle text-red-500',
    acceptLabel: 'نعم',
    rejectLabel: 'إلغاء',
    acceptButtonStyleClass: 'p-button-danger p-button-sm',
    rejectButtonStyleClass: 'p-button-text p-button-sm', // تغيير الـ secondary لـ text يعطي شكلاً أنظف
    accept: () => {
      this.serviceProjectService.DelteCenters(id).subscribe(() => {
        this.GetData();
      });
    }
  });
}

}

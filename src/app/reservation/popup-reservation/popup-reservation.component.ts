import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceProjectService} from '../../service-project.service';
import { TokenService } from '../../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-reservation',
  templateUrl: './popup-reservation.component.html',
  styleUrl: './popup-reservation.component.css'
})
export class PopupReservationComponent {


  public DateNow: Date = new Date();

  issueForm!: FormGroup;
  public userid:number | null | undefined;

  constructor(public dialogRef: MatDialogRef<PopupReservationComponent>,
        private serviceProjectService:ServiceProjectService,
        private tokenService: TokenService,
        private formgrup:FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        

        
    
  ) {}

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

  ngOnInit() {

    

this.userid = this.tokenService.getUserId();
debugger


    this.issueForm = new FormGroup({
     date: new FormControl(new Date().toISOString().split('T')[0], Validators.required), // ضبط التاريخ الحالي
      time: new FormControl(this.formatTimeToHHMM(new Date()), Validators.required),
      phon_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      issues: new FormControl('', Validators.required),
      idcenter:new FormControl(this.data.idCenter),
      iddoctor:new FormControl(this.data.idDoctor),
      iduser:new FormControl(this.userid),
      id: new FormControl(0)
    });


    if(this.data.idres>0 && this.data.idres!=null){


      this.serviceProjectService.ediereservation(this.data.idres).subscribe(res=>{
        debugger
        const formattedDate = res.date.split('T')[0];      
        this.issueForm.patchValue({ date: formattedDate });
        this.issueForm.patchValue({ time: res.time });
        this.issueForm.patchValue({ phon_number: res.phonnumber });
        this.issueForm.patchValue({ issues: res.issues });

        this.issueForm.patchValue({ idcenter: res.idcenter });
        this.issueForm.patchValue({ iddoctor: res.iddoctor });
        this.issueForm.patchValue({ id: res.id });
      
      });




    }





  }

  


    formatTimeToHHMM(date: Date): string {
      return date.toTimeString().split(' ')[0].slice(0, 5); // استخراج HH:mm فقط
    }
    




    onSubmit() {
      debugger;
      let formData = { ...this.issueForm.value };
    
      if (formData.time) {
        let [hours, minutes] = formData.time.split(':');
    
        // تأكد من تنسيق الوقت كـ hh:mm:ss لتناسب TimeSpan
        formData.time = `${this.pad(+hours)}:${this.pad(+minutes)}:00`;
      }
    
      console.log("🔹 بيانات قبل الإرسال:", JSON.stringify(formData, null, 2)); 
    
      this.issueForm.controls['time'].setValue(formData.time ?? null);
    
      this.serviceProjectService.SaveReservation(this.issueForm.value).subscribe(
        (res: any) => {
          console.log("✅ API Response:", res);
          if (res === true) {
            this.SaveSuccess();
            this.dialogRef.close(false);
            this.router.navigate(['/myreservation']);
            debugger
            this.data.lodData()

          } else {
            this.SaveFaild();
          }
        },
        (error) => {
          console.error("❌ خطأ أثناء حفظ الحجز:", error);
          this.SaveFaild();
        }
      );
    }
    
    // دالة مساعدة لإضافة صفر للأرقام الأقل من 10
    pad(n: number): string {
      return n < 10 ? '0' + n : n.toString();
    }
    

    SaveSuccess() {
      alert("تم الحفظ بنجاح ✅");
    }
  
    SaveFaild() {
      alert("فشل في الحفظ ❌");
    }



onCancel() {
  this.dialogRef.close(false);
}
}

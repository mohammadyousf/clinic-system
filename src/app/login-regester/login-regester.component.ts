import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ServiceProjectService } from '../service-project.service';
import { Servicloginandreservation } from './serves-loginandreservation';

@Component({
  selector: 'app-login-regester',
  templateUrl: './login-regester.component.html',
  styleUrl: './login-regester.component.css'
})
export class LoginRegesterComponent {

 signupForm!: FormGroup;
 signupFormlogin!: FormGroup;
   // signupForm!   : UntypedFormGroup
constructor(private formgrup:FormBuilder,
  private serviceProjectService:ServiceProjectService,
  private Servicloginandregester:Servicloginandreservation
  
){}



ngOnInit(){

this.signupForm=this.formgrup.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  id_doctor:[0]
})


this.signupFormlogin=this.formgrup.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
})
}



onSubmit() {
  debugger
  if (this.signupForm.valid) {
    console.log('Form Submitted:', this.signupForm.value);

this.Servicloginandregester.AddNewUser(this.signupForm.value).subscribe(
  (res: any) => {
    console.log("✅ API Response:", res);
    if (res === true) { 
      this.SaveSuccess();
    } else {
      this.SaveFaild();
    }
  },
  (error) => {
    console.error("❌ خطأ أثناء حفظ الحجز:", error);
    this.SaveFaild();
  }
);

  } else {
    console.log('Form is invalid');
  }

}




SaveSuccess() {
  alert("تم الحفظ بنجاح ✅");
}

SaveFaild() {
  alert("فشل في الحفظ ❌");
}

UserNotFound() {
  alert(" يوجد خطاء با الايميل او الباسورد❌");
}
onSubmit2() {
  debugger;

  if (this.signupFormlogin.valid) {
    console.log('Form Submitted:', this.signupFormlogin.value);

    this.Servicloginandregester.LoginUser(this.signupFormlogin.value).subscribe(
      (res: string) => {
        console.log("✅ Token Received:", res);
        debugger
        localStorage.setItem('token', res);

        location.href = '/';
      },
      (error) => {
        console.error("❌ فشل تسجيل الدخول:", error);
        this.UserNotFound();
      }
    );
  }
}




}

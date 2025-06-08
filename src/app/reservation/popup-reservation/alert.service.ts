import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  SaveSuccess() {
    alert("تم الحفظ بنجاح ✅");
  }

  SaveFaild() {
    alert("فشل في الحفظ ❌");
  }
}

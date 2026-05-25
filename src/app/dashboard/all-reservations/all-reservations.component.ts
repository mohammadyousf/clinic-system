import { Component, OnInit } from '@angular/core'; // 1. أضفنا OnInit هنا
import { ServiceProjectService } from '../../service-project.service';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.css'
})
export class AllReservationsComponent implements OnInit { // 2. عملنا implement للـ Interface
  ClincList: any;
  DoctorId: string | null = null;

  constructor(
    private serviceProjectService: ServiceProjectService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    debugger
    this.DoctorId = this.tokenService.getDoctorId();

    if (this.DoctorId) {
      this.GetDataReservation(Number(this.DoctorId));
    }
  }

  GetDataReservation(id: number) {
    debugger;
    this.serviceProjectService.GetDataReservationByDoctor(id).subscribe({
      next: (res) => {
        debugger
        this.ClincList = res; 
        console.log('Data loaded:', this.ClincList);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
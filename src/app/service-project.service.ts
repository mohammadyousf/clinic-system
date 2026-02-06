import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjectService {
// private readonly apiUrl = 'https://localhost:7031/api/loginandregester/AddUse'  

  constructor(private http: HttpClient) { 
    
  }

  
private handleError(error: HttpErrorResponse) {
  console.error('Error occurred:', error);
  return throwError(() => new Error("Something went wrong; please try again later."));
}

   getDataCenter(): Observable<any> {
     return this.http.get<any>(`https://localhost:7031/api/IndexPage/GetIndexPage`);
  }
  


  getDataDocotrs(id:number): Observable<any> {
    return this.http.get<any>(`https://localhost:7031/api/IndexPage/GetCenterById/`+id);
 }
  




public SaveReservation(post: any): Observable<any> {
  const httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  };

  return this.http.post<any>(
    "https://localhost:7031/api/IndexPage/SaveReservation/", 
    JSON.stringify(post), 
    httpOptions
  ).pipe(
    catchError(this.handleError)
  );
}



getDataReservation(userid:number): Observable<any> {
  return this.http.get<any>(`https://localhost:7031/api/IndexPage/getDataReservation/`+userid);
}


DelteReservation(id:number): Observable<any> {
  return this.http.get<any>(`https://localhost:7031/api/IndexPage/DelteReservation/`+id);
}



ediereservation(id:number): Observable<any> {
  return this.http.get<any>(`https://localhost:7031/api/IndexPage/ediereservation/`+id);
}






  GetDataMedicalCenter(id:number): Observable<any> {
    return this.http.get<any>(`https://localhost:7031/api/AddNewMedicalCenter/GetDataMedicalCenter/`+id);
 }
  


  }


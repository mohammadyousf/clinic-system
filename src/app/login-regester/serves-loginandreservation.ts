import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servicloginandreservation {

    constructor(private http: HttpClient) { 
    
    }



AddNewUser(data: any): Observable<boolean> {
  const apiUrl = 'https://localhost:7031/api/loginandregester/AddUser';
  
  return this.http.post<boolean>(apiUrl, data).pipe(
    catchError(error => {
      console.error('Error adding new user:', error);
      throw error; // Re-throw the error for the subscriber to handle
    })
  );
}


LoginUser(data: any): Observable<string> {
  const apiUrl = 'https://localhost:7031/api/loginandregester/LoginUser';

  return this.http.post(apiUrl, data, { responseType: 'text' }).pipe(
    catchError(error => {
      console.error('Error LoginUser:', error);
      return throwError(() => error); 
    })
  );
}





}

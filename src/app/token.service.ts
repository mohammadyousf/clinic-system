import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  sub: string;
  UserId: number;
  id_doctor: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getDecodedToken(): JwtPayload | null {
    const token = localStorage.getItem('token');
    return token ? jwtDecode<JwtPayload>(token) : null;
  }
  getUserId(): number | null {
    const decoded = this.getDecodedToken();
    return decoded ? Number(decoded.UserId) : null;
  }
  
  

  getUserEmail(): string | null {
    const decoded = this.getDecodedToken();
    return decoded ? decoded.sub : null;
  }

  getDoctorId(): string | null {
    const decoded = this.getDecodedToken();
    return decoded ? decoded.id_doctor : null;
  }
}

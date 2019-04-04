import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  loginUser(getUserData) {
    return this.http.get('http://localhost:3000/users', {
      params: getUserData
    });
  }
}

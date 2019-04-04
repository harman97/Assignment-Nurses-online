import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  constructor(private http: HttpClient) { }

  getUser(getUserData) {
    return this.http.get('http://localhost:3000/users/' + getUserData)
  };
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutUserDetailsService {

  constructor(private http: HttpClient) { }

  updateUser(UserData, id) {
    return this.http.put('http://localhost:3000/users/' + id, UserData);
  }
}

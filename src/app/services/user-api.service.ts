import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserData} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  signup(user: UserData) {
    user.courseList =[];
    return this.http.post(this.apiUrl, user);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLogin, UserRegister } from '../models/user';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private authState = new BehaviorSubject<Boolean>(
  //   this.getInitialStateOfUser()
  // );
  // public readonly currentUser = this.authState.asObservable();
  apiUri = 'http://127.0.0.1:5000';
  
  constructor(private http: HttpClient) {}

  // getInitialStateOfUser(): Boolean {
  //   return this.appComponent.isUser.valueOf();
  // }

  registerUser(userRegister: UserRegister) {
    const url = this.apiUri + '/api/register';
    return this.http.post<UserRegister>(url, userRegister);
  }

  loginUser(userLogin: UserLogin) {
    const url = this.apiUri + '/api/login';
    return this.http.post<UserLogin>(url, userLogin);
  }
}

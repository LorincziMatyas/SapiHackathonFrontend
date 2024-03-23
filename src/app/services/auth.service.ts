import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new BehaviorSubject<Boolean>(
    this.getInitialStateOfUser()
  );
  public readonly currentUser = this.authState.asObservable();

  constructor(private appComponent: AppComponent) {}
  getInitialStateOfUser(): Boolean {
    return this.appComponent.isUser.valueOf();
  }
}

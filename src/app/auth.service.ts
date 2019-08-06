import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', userInfo.username);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

}

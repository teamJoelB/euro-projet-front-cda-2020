import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = null;

  constructor(private route: Router) { }

  setUserSession(u): any{
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserConnect(): any{
    this.user = JSON.parse(localStorage.getItem('userConnect'));
    return this.user;
  }

  deconnect(): any{
    localStorage.clear();
    this.route.navigateByUrl('');
  }

  isConnected(): boolean{
    if (this.getUserConnect() != null) {
      return true;
    }
    else {
      return false;
    }
  }
}

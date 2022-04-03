import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'euro-paris';

  constructor(private route: Router, public authService: AuthService) {}

  goConnexion(): any {
    this.route.navigateByUrl('connexion');
  }
}

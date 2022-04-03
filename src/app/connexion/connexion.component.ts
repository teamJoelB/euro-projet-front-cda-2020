import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }

  user;
  msgErr;
  ngOnInit(): void {
    if (this.authService.isConnected()) {
      this.route.navigateByUrl('poule');
    }
  }

  connexion(user): any {
    this.http.post('http://localhost:8083/login', user).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserSession(this.user);
          this.route.navigateByUrl('poule');
        }
        else {
          this.msgErr = 'identifiant ou mdp incorrect';
        }
      },
      error: (err) => { console.log(err); }
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePouleComponent } from '../create-poule/create-poule.component';
import { AuthService } from '../service/auth.service';
import { PouleService } from '../service/poule.service';

@Component({
  selector: 'app-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.css']
})
export class PouleComponent implements OnInit {
  poule;
  constructor(private http: HttpClient, private route: Router, private pouleService: PouleService, private dialog: MatDialog,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8083/poule').subscribe({
      next: (data) => { this.poule = data; },
      error: (err) => { console.log(err); }
    });
  }

  changeFormatMedia(media): any {
    return window.atob(media);
  }

  mediaExist(media): boolean{
    if (media != null) {
      return true;
    }
    else {
      return false;
    }
  }

  detailPoule(poule): any{
    this.pouleService.poule = poule;
    this.route.navigateByUrl('poule-detail');
  }

  callCreatePays(): any{
    const myDialog = this.dialog.open(CreatePouleComponent);
    myDialog.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }



}

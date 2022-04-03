import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PouleService } from '../service/poule.service';

@Component({
  selector: 'app-poule-detail',
  templateUrl: './poule-detail.component.html',
  styleUrls: ['./poule-detail.component.css']
})
export class PouleDetailComponent implements OnInit {
  pays;
  constructor(private http: HttpClient, private pouleService: PouleService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8083/pays/poule/' + this.pouleService.poule.id).subscribe({
      next: (data) => { this.pays = data; },
      error: (err) => { console.log(err); }
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pays',
  templateUrl: './create-pays.component.html',
  styleUrls: ['./create-pays.component.css']
})
export class CreatePaysComponent implements OnInit {

  poules;
  mesPays;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8083/poule').subscribe({
      next: (data) => { this.poules = data; },
      error: (err) => { console.log(err); }
    });

    this.http.get('http://localhost:8083/pays').subscribe({
      next: (data) => {
        this.mesPays = data;
      },
      error: (err) => { console.log(err); }
    });
  }

  createPays(pays): any{
    // console.log('pays ', pays);
    this.http.post('http://localhost:8083/pays', pays).subscribe({
      next: (data) => {
        this.ngOnInit();
      },
      error: (err) => { console.log(err); }
    });
  }

}

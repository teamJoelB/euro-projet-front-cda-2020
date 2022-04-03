import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-poule',
  templateUrl: './create-poule.component.html',
  styleUrls: ['./create-poule.component.css']
})
export class CreatePouleComponent implements OnInit {

  nbMatchPoule = 3;
  mediaUrl;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<CreatePouleComponent>) { }

  ngOnInit(): void {
  }

  createPoule(poule): any {
    poule.baniere = window.btoa(this.mediaUrl);
    this.http.post('http://localhost:8083/poule', poule).subscribe({
      next: (data) => {
        this.dialogRef.close();
      },
      error: (err) => { console.log(err); }
    });
  }

  onFileChanged(event): any{
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.mediaUrl = reader.result;
    };
  }

}

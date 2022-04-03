import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PouleComponent } from './poule/poule.component';
import { HttpClientModule } from '@angular/common/http';
import { PouleDetailComponent } from './poule-detail/poule-detail.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreatePouleComponent } from './create-poule/create-poule.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatePaysComponent } from './create-pays/create-pays.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    PouleComponent,
    PouleDetailComponent,
    ConnexionComponent,
    AdminComponent,
    CreatePouleComponent,
    CreatePaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  entryComponents: [
    CreatePouleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatePaysComponent } from './create-pays/create-pays.component';
import { PouleDetailComponent } from './poule-detail/poule-detail.component';
import { PouleComponent } from './poule/poule.component';

const routes: Routes = [
  { path: 'poule', component: PouleComponent },
  { path: 'poule-detail', component: PouleDetailComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'create-pays', component: CreatePaysComponent },
  {
    path: 'admin', component: AdminComponent /*, children: [
      { path: 'poule', component: PouleComponent },
      { path: 'create-pays', component: CreatePaysComponent },
    ]
  */},
  { path: '', redirectTo: 'poule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

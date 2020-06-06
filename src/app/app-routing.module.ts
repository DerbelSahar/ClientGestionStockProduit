import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './Components/produit/produit.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'produit', component: ProduitComponent},
  { path: 'dashboard',  component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './Components/produit/produit.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProduitResolver } from './Components/produit/produit.resolver';

const routes: Routes = [
  {path: 'produit', component: ProduitComponent,
resolve: {
  produits: ProduitResolver
}
},
  { path: 'dashboard',  component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }

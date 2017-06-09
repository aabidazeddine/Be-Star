import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UtilisateurComponent} from "./utilisateur.component";



const routes:Routes = [
  {path: '', component:UtilisateurComponent},
  /*{path: 'ajouter', component: CaisseCreateComponent},
  {path: 'modifier/:id', component: CaisseUpdateComponent},
  {path: ':id', component: CaisseDetailComponent}*/
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);

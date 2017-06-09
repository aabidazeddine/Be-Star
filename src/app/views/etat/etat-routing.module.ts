/**
 * Created by abousenna on 07/06/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EtatComponent} from "./etat.component";
const routes: Routes = [
  {path: '', component: EtatComponent},
  /*{path: 'ajouter', component: CaisseCreateComponent},
   {path: 'modifier/:id', component: CaisseUpdateComponent},
   {path: ':id', component: CaisseDetailComponent}*/
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);

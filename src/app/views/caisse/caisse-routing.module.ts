/**
 * Created by abousenna on 07/06/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CaisseComponent} from "./caisse.component";
const routes: Routes = [
  {path: '', component: CaisseComponent},
  /*{path: 'ajouter', component: CaisseCreateComponent},
   {path: 'modifier/:id', component: CaisseUpdateComponent},
   {path: ':id', component: CaisseDetailComponent}*/
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);

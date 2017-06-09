/**
 * Created by abousenna on 07/06/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsulterLivraisonComponent} from './consulter-livraison/consulter-livraison.component';
import {ListeLivraisonComponent} from './liste-livraison/liste-livraison.component';
import {ReceptionnerLivraisonComponent} from "./receptionner-livraison/receptionner-livraison.component";
const routes: Routes = [
  {path: 'consulter', component: ConsulterLivraisonComponent},
  {path: '', component: ListeLivraisonComponent},
  {path: 'receptionner', component: ReceptionnerLivraisonComponent}
  /*{path: 'ajouter', component: CaisseCreateComponent},
   {path: 'modifier/:id', component: CaisseUpdateComponent},
   {path: ':id', component: CaisseDetailComponent}*/
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

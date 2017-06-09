import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './static-views/home/home.component';
import { LoginComponent } from './static-views/authentification/login/login.component';
import { LogoutComponent } from './static-views/authentification/logout/logout.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home/stock', loadChildren: 'app/views/stock/stock.module#StockModule' },
  { path: 'home/utilisateur', loadChildren: 'app/views/utilisateur/utilisateur.module#UtilisateurModule' },
  { path: 'home/caisse', loadChildren: 'app/views/caisse/caisse.module#CaisseModule' },
  { path: 'home/etat', loadChildren: 'app/views/etat/etat.module#EtatModule' }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


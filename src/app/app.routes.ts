import { Routes } from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Basic} from './basic/basic';
import {LoginComponent} from './login/login';
import {Conversion} from './conversion/conversion';
import {DeviseComponent} from './devise/devise';
import {Tva} from './basic/tva/tva';
import {Calculatrice} from './basic/calculatrice/calculatrice';
import {ShowgradientComponent} from './common/components/showgradient/showgradient';

export const routes: Routes = [
  { path: 'ngr-welcome', component: Welcome },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  {
    path: 'ngr-basic', component: Basic,
    children: [
      { path: 'tva', component: Tva },
      { path: 'calculatrice', component: Calculatrice },
      { path: 'color', component: ShowgradientComponent },
      { path: '', redirectTo: 'tva', pathMatch: 'prefix' }
    ]
  },
  { path: 'ngr-conversion', component: Conversion },
  { path: 'ngr-devise', component: DeviseComponent },
  { path: '**', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

import { Routes } from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Basic} from './basic/basic';
import {LoginComponent} from './login/login';
import {Conversion} from './conversion/conversion';

export const routes: Routes = [
  { path: 'ngr-welcome', component: Welcome },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-basic', component: Basic },
  { path: 'ngr-conversion', component: Conversion },
  { path: '**', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

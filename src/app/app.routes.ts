import { Routes } from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Basic} from './basic/basic';
import {Login} from './login/login';

export const routes: Routes = [
  { path: 'ngr-welcome', component: Welcome },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: Login },
  { path: 'ngr-basic', component: Basic },
  { path: '**', redirectTo: '/ngr-welcome', pathMatch: 'full'}
];

import { Component } from '@angular/core';
import {Login} from '../common/data/login';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  public login : Login = new Login();
  public message = "";
  public onLogin(){
    this.message = `Bienvenue ${this.login.username} ! Vos rôles sont : ${this.login.roles}`;
  }
}

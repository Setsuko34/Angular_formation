import { Component, inject, signal } from '@angular/core';
import {LoginData} from '../common/data/login';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../common/service/login';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class LoginComponent {
  private loginService = inject(LoginService);
  public login : LoginData = new LoginData();
  public message = signal("");
  public loginSuccess = signal(false);

  public onLogin(){
    this.loginService.postLogin$(this.login).subscribe({
      next: (response) => {
        console.log("loginResponse=" + JSON.stringify(response));
        this.message.set(response.message);
        this.loginSuccess.set(response.status);
      },
      error: (error) => {
        console.error("Erreur login :", error);
        this.message.set("Erreur de connexion au serveur");
        this.loginSuccess.set(false);
      }
    });
  }
}

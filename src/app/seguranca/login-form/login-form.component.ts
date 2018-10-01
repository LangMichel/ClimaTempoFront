import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  exibirSpinner = false;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private rota: Router
  ) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    this.exibirSpinner = true;

    this.auth.login(usuario, senha)
    .then(() => {
      this.exibirSpinner = false;
      this.rota.navigate(['/cidades']);
    })
    .catch (erro => {
      this.exibirSpinner = false;
      this.errorHandler.handle(erro);
    });
  }

}

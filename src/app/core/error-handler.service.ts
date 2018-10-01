import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';
import { NotAuthenticatedError } from '../seguranca/clima-http';
import { isNull } from 'util';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou. Realize o login novamente.';
      this.router.navigate(['/login']);

    } else if (errorResponse.status = 403) {
      let errors;
      errors = errorResponse.json();

      if (!isNull((errors[0].mensagemUsuario))) {
        try {
          msg = errors[0].mensagemUsuario;
          } catch (e) {}
      } else {
        msg = 'Permissão não autorizada. Procure o administrador do sistema.';
      }

    } else if (errorResponse instanceof Response &&
      errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msg = 'Ocorreu um erro ao processar a sua solicitação.';

      try {
        errors = errorResponse.json();
        msg = errors[0].mensagemUsuario;
      } catch (e) {}

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }
    this.toasty.error(msg);

  }

}

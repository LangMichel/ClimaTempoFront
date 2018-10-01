import { Body } from '@angular/http/src/body';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

import { environment } from './../../environments/environment';

export class ClienteFiltro {
  email: string;
  nome: string;
  codigo: number;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class ClienteService {

  clienteUrl: string;

  constructor(private http: AuthHttp) {
        this.clienteUrl = `${environment.applicationUrl}/clientes`;
  }

    pesquisar(filtro: ClienteFiltro): Promise<any> {

      const params = new URLSearchParams();

      params.set ('page', filtro.pagina.toString());
      params.set ('size', filtro.itensPorPagina.toString());

      if (filtro.email) {
        params.set('email', filtro.email);
      }

      if (filtro.nome) {
        params.set('nome', filtro.nome);
      }

      if (filtro.codigo) {
        params.set('codigo', filtro.codigo.toString());
      }

      return this.http.get(`${environment.applicationUrl}/clientes?resumo`, { search: params })
        .toPromise()
        .then(response => {
          const responseJson = response.json();
          const clientes = responseJson.content;

          const resultado = {
            clientesDados: clientes,
            total: responseJson.totalElements
          };
          return resultado;
        });

    }

    excluir(codigo: number): Promise<void> {

      return this.http.delete(`${environment.applicationUrl}/clientes/${codigo}`)
      .toPromise()
      .then(() => null);
    }

    mudarStatus(codigo: number, ativo: boolean): Promise<void> {

      return this.http.put(`${environment.applicationUrl}/clientes/${codigo}/ativo`, JSON.stringify(ativo))
      .toPromise()
      .then(() => null);
    }

    listarTodos(): Promise<any> {
      return this.http.get(`${environment.applicationUrl}/cliente`)
      .toPromise()
      .then(response => {
          const responseJson = response.json();
          const clientes = responseJson.content;
        return clientes;
      });

    }


}

import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

import { Cidade } from '../core/model';
import { environment } from './../../environments/environment';
import { ErrorHandlerService } from '../core/error-handler.service';

export class CidadeFiltro {
  nomeCidade: string;
  nomePais: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class CidadeService {

  cidadeUrl: string;

  constructor(private http: AuthHttp,
    private errorHandler: ErrorHandlerService) {
    this.cidadeUrl = `${environment.applicationUrl}/cidades`;
   }


    pesquisar(filtro: CidadeFiltro): Promise<any> {

      const params = new URLSearchParams();

      params.set ('page', filtro.pagina.toString());
      params.set ('size', filtro.itensPorPagina.toString());

      if (filtro.nomeCidade) {
        params.set('nomeCidade', filtro.nomeCidade);
      }

      if (filtro.nomePais) {
        params.set('nomePais', filtro.nomePais);
      }

      return this.http.get(`${environment.applicationUrl}/cidades`, { search: params })
        .toPromise()
        .then(response => {
          const responseJson = response.json();
          const cidades = responseJson.content;

          const resultado = {
            cidadesDados: cidades,
            total: responseJson.totalElements
          };
          return resultado;
        });

    }

    excluir(codigo: number): Promise<void> {

      return this.http.delete(`${environment.applicationUrl}/cidades/${codigo}`)
      .toPromise()
      .then(() => null);
    }

    adicionar(cidade: Cidade): Promise <Cidade> {

      return this.http.post(this.cidadeUrl,
         JSON.stringify(cidade))
        .toPromise()
        .then(response => response.json());

    }

    atualizar(cidade: Cidade): Promise<Cidade> {

      return this.http.put(`${environment.applicationUrl}/cidades/${cidade.cd_Cidade}`,
         JSON.stringify(cidade))
      .toPromise()
      .then(response => response.json());

    }


    buscarPorCodigo(codigo: number): Promise<Cidade> {

      return this.http.get(`${environment.applicationUrl}/cidades/${codigo}`)
      .toPromise()
      .then(response => {
        const cidade = response.json() as Cidade;
        return cidade;
      });
    }


    carregarClima(cidade: number): Promise<any> {
      return this.http.get(`${environment.applicationUrl}/cidades/clima/${cidade}`)
        .toPromise()
        .then(response => {
          const responseJson = response.json();
          const cidades = responseJson;

          return cidades;
        })
        .catch(erro => this.errorHandler.handle(erro));

    }


}

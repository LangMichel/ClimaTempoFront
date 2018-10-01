import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { Cidade, Clima } from './../../core/model';

import { CidadeService } from './../cidades.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-clima-pesquisa',
  templateUrl: './clima-pesquisa.component.html',
  styleUrls: ['./clima-pesquisa.component.css']
})
export class ClimaPesquisaComponent implements OnInit {

  totalRegistros = 0;
  carregandoRegistros = true;

  clima = [];
  cidade = new Cidade();
  climaCidade: Clima[];

  @ViewChild ('tabelaClima') grid;

  constructor (
    private cidadeService: CidadeService,
    private auth: AuthService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private rota: ActivatedRoute,
    private rotaDirecionada: Router,
    private tituloPagina: Title
  ) {}

  ngOnInit () {
    const codigoCidade = this.rota.snapshot.params['codigo'];
    this.tituloPagina.setTitle('Clima');
    if (codigoCidade) {
      this.carregarCidade(codigoCidade);
      this.carregarClima(codigoCidade);
    }
  }

  carregarCidade(codigo: number) {
    this.cidadeService.buscarPorCodigo(codigo)
      .then(cidadeDados => {
        this.cidade = cidadeDados;
        this.atualizarTituloEdicaoPagina();
      })
      .catch(erro =>
        this.errorHandler.handle(erro));
  }

  carregarClima(codigo: number) {
    this.cidadeService.carregarClima(codigo)
      .then(cidadeDados => {
        this.climaCidade = cidadeDados;

        this.atualizarTituloEdicaoPagina();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicaoPagina() {
    this.tituloPagina.setTitle(`Clima para a cidade de ${this.cidade.nm_Cidade}, ${this.cidade.sg_Pais.toUpperCase()}`);
  }

}

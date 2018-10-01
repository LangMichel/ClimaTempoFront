import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';

import { ClienteService, ClienteFiltro } from './../cliente.service';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-clientes-pesquisa',
  templateUrl: './clientes-pesquisa.component.html',
  styleUrls: ['./clientes-pesquisa.component.css']
})
export class ClientesPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ClienteFiltro();

  clientes = [];

  @ViewChild ('tabelaCliente') grid;

  constructor (
    private clienteService: ClienteService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private tituloPagina: Title) {}

  ngOnInit () {
    // this.pesquisar(); ##não é mais necessário pois no onLazeLoad do html já é chamado automaticamente.
    this.tituloPagina.setTitle('Pesquisa de Clientes');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.clienteService.pesquisar( this.filtro )
      .then (resultado => {
        this.totalRegistros = resultado.total;
         this.clientes = resultado.clientesDados;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPaginaGrid(event: LazyLoadEvent) {
    const paginaAtual = event.first / event.rows; // para buscar a página atual que está da datatable na sua paginação.
    this.pesquisar(paginaAtual);


  }

  confirmarExclusao (cliente: any) {

    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(cliente);

      }

    });
  }

  excluir(cliente: any) {

    this.clienteService.excluir(cliente.cd_Pessoa)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
      this.grid.first = 0;
    }
    this.toasty.success('Pessoa ' + cliente.nm_Pessoa + ' excluída com sucesso!');

    })
    .catch(erro => this.errorHandler.handle(erro));
  }


  mudarStatus(cliente: any, ativo: boolean) {

    this.clienteService.mudarStatus(cliente.cd_Pessoa, ativo)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
      this.grid.first = 0;
    }
    if (ativo === false) {
      this.toasty.success('Cliente ' + cliente.nm_Pessoa + ' desativada com sucesso.');
    } else {
      this.toasty.success('Cliente ' + cliente.nm_Pessoa + ' ativada com sucesso.');
    }
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { CidadeService, CidadeFiltro } from './../cidades.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CidadeFiltro();
  carregandoRegistros = true;

  cidades = [];

  @ViewChild ('tabelaCidade') grid;

  constructor (
    private cidadeService: CidadeService,
    private auth: AuthService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private tituloPagina: Title
  ) {}

  ngOnInit () {
    this.tituloPagina.setTitle('Pesquisa de Cidade');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.cidadeService.pesquisar( this.filtro )
      .then (resultado => {
        this.totalRegistros = resultado.total;
         this.cidades = resultado.cidadesDados;
         this.carregandoRegistros = false;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPaginaGrid(event: LazyLoadEvent) {
    const paginaAtual = event.first / event.rows;
    this.pesquisar(paginaAtual);


  }

    confirmarExclusao (cidade: any) {

      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluir(cidade);
        }
      });
    }

    excluir(cidade: any) {

      this.cidadeService.excluir(cidade.cd_Cidade)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
        this.grid.first = 0;
        this.pesquisar(this.grid.first);
      }
      this.toasty.success('Cidade ' + cidade.nm_Cidade + ' excluída com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
    }

}

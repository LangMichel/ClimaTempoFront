import { async } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { Cidade } from './../../core/model';
import { CidadeService } from './../cidades.service';


@Component({
  selector: 'app-cidades-cadastro',
  templateUrl: './cidades-cadastro.component.html',
  styleUrls: ['./cidades-cadastro.component.css']
})
export class CidadesCadastroComponent  {

  cidade = new Cidade();
  exibirSpinner = false;

constructor(
  private cidadeService: CidadeService,
  private toasty: ToastyService,
  private errorHandler: ErrorHandlerService,
  private rota: ActivatedRoute,
  private rotaDirecionada: Router,
  private tituloPagina: Title
) { }


// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
  this.tituloPagina.setTitle('Nova Cidade');
  const codigoCidade = this.rota.snapshot.params['codigo'];
  if (codigoCidade) {
    this.carregarCidade(codigoCidade);
  }

}

get editando(){
    return Boolean(this.cidade.cd_Cidade);
}

carregarCidade(codigo: number) {
  this.cidadeService.buscarPorCodigo(codigo)
    .then(cidadeDados => {
      this.cidade = cidadeDados;
      this.atualizarTituloEdicaoPagina();
    })
    .catch(erro => this.errorHandler.handle(erro));

}


salvar(form: FormControl) {
  this.exibirSpinner = true;
  if (this.editando) {
    this.atualizarCidade(form);
  } else {
    this.adicionarCidade(form);
  }
}

   adicionarCidade(form: FormControl) {
    this.cidadeService.adicionar(this.cidade)
    .then (cidadeAdicionada => {
      this.exibirSpinner = false;
      this.toasty.success('Cidade adicionada com sucesso!');
      this.rotaDirecionada.navigate(['/cidades', cidadeAdicionada.cd_Cidade]);
    })
    .catch(erro => {this.errorHandler.handle(erro);
      this.exibirSpinner = false;
    });
   }

   atualizarCidade(form: FormControl) {
     this.cidadeService.atualizar(this.cidade)
      .then (cidadeDados => {
        this.cidade = cidadeDados;
        this.exibirSpinner = false;
        this.toasty.success(`Cidade ${this.cidade.nm_Cidade} atualizada com sucesso.`);
        this.atualizarTituloEdicaoPagina();
      })
      .catch (erro => {this.errorHandler.handle(erro);
        this.exibirSpinner = false;
      });
   }

   novo(form: FormControl) {
     form.reset();
     this.cidade = new Cidade;
     this.rotaDirecionada.navigate(['/cidades/nova']);
   }

   atualizarTituloEdicaoPagina() {
     this.tituloPagina.setTitle(`Edição de Cidade: ${this.cidade.nm_Cidade}`);

   }

}



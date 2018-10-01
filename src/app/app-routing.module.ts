import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { ClimaPesquisaComponent } from './cidades/clima-pesquisa/clima-pesquisa.component';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const rotas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cidades', component: CidadesPesquisaComponent },
  { path: 'cidades/nova', component: CidadesCadastroComponent },
  { path: 'clientes', component: ClientesPesquisaComponent },
  { path: 'clientes/novo', component: ClientesCadastroComponent },
  { path: 'cidades/clima', component: ClimaPesquisaComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' } // deve vir sempre por ultimo pois o angular irá procurar
  // os caminhos e caso não encontre qual url chamar cairá neste path.

];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

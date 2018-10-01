import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, URLSearchParams } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BackgroundColoridoDirective } from './background-colorido.directive';
import { CidadesModule } from './cidades/cidades.module';
import { ClientesModule } from './clientes/clientes.module';
import { CoreModule } from './core/core.module';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ClimaPesquisaComponent } from './cidades/clima-pesquisa/clima-pesquisa.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { SegurancaModule } from './seguranca/seguranca.module';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundColoridoDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CidadesModule,
    ClientesModule,
    CurrencyMaskModule,
    SegurancaModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

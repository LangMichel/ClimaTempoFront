import { NgModule, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, registerLocaleData} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import locatePt from '@angular/common/locales/pt';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { JwtHelper } from 'angular2-jwt';

import { ErrorHandlerService } from './error-handler.service';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ClienteService } from './../clientes/cliente.service';
import { CidadeService } from './../cidades/cidades.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthService } from '../seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData (locatePt, 'pt-BR');

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [BarraNavegacaoComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
  exports: [
    BarraNavegacaoComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    CidadeService,
    ClienteService,
    ConfirmationService,
    Title,
    { provide: LOCALE_ID , useValue: 'pt-BR' },
    ErrorHandlerService,
    AuthService,
    JwtHelper
  ]
})
export class CoreModule { }

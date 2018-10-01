import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientesPesquisaComponent } from './clientes-pesquisa/clientes-pesquisa.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { SharedModule } from '../shared/shared.module';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CheckboxModule,
    InputMaskModule,
    RouterModule,

    SharedModule
  ],
  declarations: [
    ClientesPesquisaComponent,
    ClientesCadastroComponent
  ],
  exports: [ ]
})
export class ClientesModule { }

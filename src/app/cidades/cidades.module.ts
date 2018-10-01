import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { PanelModule } from 'primeng/components/panel/panel';
import { CarouselModule } from 'primeng/components/carousel/carousel';
import { ProgressSpinnerModule } from 'primeng/components/progressspinner/progressspinner';

import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { ClimaPesquisaComponent } from './clima-pesquisa/clima-pesquisa.component';
import { CidadesRoutingModule } from './cidades-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CheckboxModule,
    PanelModule,
    CarouselModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    SharedModule,
    CidadesRoutingModule
  ],
  declarations: [
    CidadesCadastroComponent,
    CidadesPesquisaComponent,
    ClimaPesquisaComponent
  ],
  exports: [ ]
})
export class CidadesModule { }

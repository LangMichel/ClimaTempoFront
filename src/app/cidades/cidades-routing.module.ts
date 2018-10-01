import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { ClimaPesquisaComponent } from './clima-pesquisa/clima-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';

const rotas: Routes = [
  { path: 'cidades',
      component: CidadesPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CONSULTAR_CIDADE'] }
  },

  { path: 'cidades/nova',
      component: CidadesCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_CIDADE'] }
  },

  { path: 'cidades/:codigo',
      component: CidadesCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_EDITAR_CIDADE'] }
  },

  { path: 'cidades/clima/:codigo',
      component: ClimaPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CONSULTAR_CIDADE'] }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [ RouterModule ]
})
export class CidadesRoutingModule { }

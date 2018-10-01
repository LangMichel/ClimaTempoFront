import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, RequestOptions } from '@angular/http';
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { PasswordModule } from 'primeng/components/password/password';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ProgressSpinnerModule } from 'primeng/components/progressspinner/progressspinner';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { ClimaHttp } from './clima-http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]

  });
  return new ClimaHttp(auth, config, http, options);

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    PasswordModule,
    ProgressSpinnerModule,
    SegurancaRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  declarations: [
    LoginFormComponent,
  ],

  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [AuthService, Http, RequestOptions]
    },
    AuthGuard,
    LogoutService
   ]
})
export class SegurancaModule { }

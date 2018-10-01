import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';

import { environment } from './../../environments/environment';

@Injectable()
export class LogoutService {

  tokensRevokeUrl: string;

  constructor(
    private http: AuthHttp,
    private auth: AuthService
  ) {
    this.tokensRevokeUrl = `${environment.applicationUrl}/tokens/revoke`;
  }


  lougot() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
    .toPromise()
    .then(() => {
      this.auth.limparAccessToken();
    });
  }
}

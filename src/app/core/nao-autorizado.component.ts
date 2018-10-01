import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container">
    <h2 class="text-center">Acesso negado! Contate o Administrador do Sistema.</h2>
    </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {
  constructor() {}
  ngOnInit() {

  }
}

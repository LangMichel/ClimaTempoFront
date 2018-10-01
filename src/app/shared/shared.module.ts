import { MessagensComponent } from './messagens/messagens.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagensComponent],
  exports: [
    MessagensComponent
  ]
})
export class SharedModule { }

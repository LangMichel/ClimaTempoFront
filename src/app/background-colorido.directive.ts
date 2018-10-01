import { Directive, HostBinding, HostListener } from '@angular/core';
// import { HostBinding, HostListener } from '@angular/core/src/metadata/directives';

@Directive({
  selector: '[appBackgroundColorido]'
})
export class BackgroundColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('mouseover') aoGanharFoco() {
    this.corDeFundo = 'DimGray';
  }

  @HostListener('mouseout') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}

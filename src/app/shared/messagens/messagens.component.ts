import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messagens',
  template: `
            <div *ngIf=temErro() class="ui-message ui-messages-error">
                {{ text }}
            </div>
  `,
  styles: [`
  .ui-messages-error {
    margin: 0;
    margin-top: 4px;
  }
  `]
})
export class MessagensComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    // tslint:disable-next-line:semicolon
    return this.control.hasError(this.error) && this.control.dirty
  }

}

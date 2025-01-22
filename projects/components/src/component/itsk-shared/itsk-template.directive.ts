import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[itskTemplate]',
    standalone: false
})
export class ItskTemplateDirective {
  @Input() type?: string;
  @Input('itskTemplate') name?: string;

  constructor(public template: TemplateRef<any>) {}
}

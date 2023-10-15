import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItskToggleComponent} from './itsk-toggle/itsk-toggle.component';

@NgModule({
  declarations: [ItskToggleComponent],
  exports: [ItskToggleComponent],
  imports: [
    CommonModule
  ]
})
export class ItskToggleModule {
}

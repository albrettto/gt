import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItskPrependZeroPipe} from './itsk-prepend-zero.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItskPrependZeroPipe],
  exports: [ItskPrependZeroPipe]
})
export class ItskPrependZeroPipeModule {
}

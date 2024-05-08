import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItskDropdownContentDirective } from './itsk-dropdown-content.directive';
import { ItskDropdownHeadDirective } from './itsk-dropdown-head.directive';
import { ItskDropdownComponent } from './itsk-dropdown/itsk-dropdown.component';

@NgModule({
  declarations: [
    ItskDropdownComponent,
    // ItskDropdownHeadComponent,
    // ItskDropdownContentComponent,
    ItskDropdownHeadDirective,
    ItskDropdownContentDirective,
  ],
  imports: [CommonModule],
  exports: [ItskDropdownComponent, ItskDropdownHeadDirective, ItskDropdownContentDirective],
})
export class ItskDropdownModule {}

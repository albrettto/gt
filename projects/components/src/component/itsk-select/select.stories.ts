import { ScrollingModule } from '@angular/cdk/scrolling';
import { ItskDropdownModule } from '../itsk-dropdown/itsk-dropdown.module';
import { ItskMarkDirective } from '../itsk-shared/itsk-mark.directive';
import { ItskSelectComponent } from './itsk-select/itsk-select.component';

export default { title: 'Select (old)' };

export const itskSelect = () => ({
  component: ItskSelectComponent,
  props: {
    items: ['First', 'Second', 'Third'],
    searchRef: '',
    placeholder: 'empty',
    selectedRef: 'block',
  },
  moduleMetadata: {
    imports: [ItskDropdownModule, ScrollingModule],
    declarations: [ItskMarkDirective],
  },
});

export const itskSelectMultiple = () => ({
  component: ItskSelectComponent,
  props: {
    items: ['First', 'Second', 'Third'],
    searchRef: '',
    placeholder: 'empty',
    selectedRef: 'block',
    multiple: true,
  },
  moduleMetadata: {
    imports: [ItskDropdownModule, ScrollingModule],
    declarations: [ItskMarkDirective],
  },
});

export const itskSelectDisabled = () => ({
  component: ItskSelectComponent,
  props: {
    items: ['First', 'Second', 'Third'],
    searchRef: '',
    placeholder: 'empty',
    selectedRef: 'block',
    disabled: true,
  },
  moduleMetadata: {
    imports: [ItskDropdownModule, ScrollingModule],
    declarations: [ItskMarkDirective],
  },
});

import {FilterBase} from './filter-base';
import {StringFilterType} from './enum/string-filter-type.enum';

export class StringFilter extends FilterBase {
  value: string = '';
  type: StringFilterType = StringFilterType.Contains;

  constructor(options?: {
    value?: string;
    type?: StringFilterType;
    fieldName: string;
    name: string;
  }) {
    super(options);
    if (options) {
      this.value = options.value ?? '';
      this.type = options.type || StringFilterType.Contains;
    }
  }
}

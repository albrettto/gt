import {FilterBase} from './filter-base';
import {ListFilterType} from './enum/list-filter-type.enum';

export class ListFilter extends FilterBase {
  value: any[] = [];
  type: ListFilterType = ListFilterType.None;

  constructor(options?: {
    value?: any[];
    type?: ListFilterType;
    fieldName: string;
    name: string;
  }) {
    super(options);
    if (options) {
      this.value = options.value ?? [];
      this.type = options.type || ListFilterType.None;
    }
  }
}

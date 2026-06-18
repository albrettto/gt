import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItskDatePickerComponent } from '../../../../itsk-date-picker/itsk-date-picker/itsk-date-picker.component';
import { ItskMonthPickerComponent } from '../../../../itsk-date-picker/itsk-month-picker/itsk-month-picker.component';
import { CellComponentBase } from '../../../model/cell-component-base';
import { GridColumn } from '../../../model/grid-column';
import { GridRow, IId } from '../../../model/grid-row';
import { ItskGridService } from '../../../service/itsk-grid.service';

@Component({
  selector: 'itsk-month-cell',
  templateUrl: './month-cell.component.html',
  styleUrls: ['./month-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ItskMonthPickerComponent, FormsModule, DatePipe],
})
export class MonthCellComponent<T extends IId> extends CellComponentBase<T> implements OnInit {
  @Input() column?: GridColumn;
  @Input() row?: GridRow<any>;
  @ViewChild('input', { static: false }) input?: ItskDatePickerComponent;

  constructor(svc$: ItskGridService<T>, cdr$: ChangeDetectorRef) {
    super(svc$, cdr$);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override startEdit() {
    setTimeout(() => {
      this.input?.openPicker(true);
      this.cdr$.markForCheck();
    }, 0);
  }

  override stopEdit() {
    this.cdr$.markForCheck();
  }
}

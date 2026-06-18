import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-year-cell',
  templateUrl: './year-cell.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./year-cell.component.scss'],
})
export class YearCellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

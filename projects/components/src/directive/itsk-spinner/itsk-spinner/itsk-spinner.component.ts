import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-itsk-spinner',
  templateUrl: './itsk-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./itsk-spinner.component.scss'],
})
export class ItskSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

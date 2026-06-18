import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-card-header',
  templateUrl: './itsk-card-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./itsk-card-header.component.scss'],
})
export class ItskCardHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

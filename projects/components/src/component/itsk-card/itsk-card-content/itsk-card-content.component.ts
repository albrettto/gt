import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-card-content',
  templateUrl: './itsk-card-content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./itsk-card-content.component.scss'],
})
export class ItskCardContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

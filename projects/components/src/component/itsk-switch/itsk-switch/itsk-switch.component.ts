import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'itsk-switch',
    templateUrl: './itsk-switch.component.html',
    styleUrls: ['./itsk-switch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItskSwitchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

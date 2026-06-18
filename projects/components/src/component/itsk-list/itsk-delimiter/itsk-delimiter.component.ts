import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-delimiter',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '',
})
export class ItskDelimiterComponent implements OnInit {
  @HostBinding('class.list__delimiter') css = true;

  constructor() {}

  ngOnInit() {}
}

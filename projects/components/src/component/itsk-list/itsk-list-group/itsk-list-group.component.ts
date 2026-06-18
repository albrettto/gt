import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'itsk-list-group',
  templateUrl: './itsk-list-group.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./itsk-list-group.component.scss'],
})
export class ItskListGroupComponent implements OnInit {
  @HostBinding('class.list__group') classListGroup = true;

  constructor() {}

  ngOnInit() {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItskClickOutsideDirective } from '../../itsk-click-outside/itsk-click-outside.directive';
import { IItskTooltipConfig } from '../model/i-itsk-tooltip-config';
import { ItskTooltipPosition } from '../model/itsk-tooltip-position.enum';

@Component({
  selector: 'itsk-tooltip-container',
  templateUrl: './itsk-tooltip-container.component.html',
  styleUrls: ['./itsk-tooltip-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ItskClickOutsideDirective],
})
export class ItskTooltipContainerComponent implements OnInit {
  ItskTooltipPosition = ItskTooltipPosition;
  @Input() config?: IItskTooltipConfig;
  @Output() destroyed: EventEmitter<boolean> = new EventEmitter();
  ready: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.ready = true;
    }, 0);
  }

  destroyTooltip() {
    this.destroyed.emit(true);
  }
}

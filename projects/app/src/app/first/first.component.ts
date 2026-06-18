import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DocViewerComponent } from '../shared/doc-viewer/doc-viewer.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  imports: [DocViewerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {}

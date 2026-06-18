import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ItskTreeComponent } from '../itsk-tree/itsk-tree.component';

@Component({
  selector: 'itsk-tree-item',
  templateUrl: './itsk-tree-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./itsk-tree-item.component.scss'],
})
export class ItskTreeItemComponent implements OnInit {
  @HostBinding('class.tree__item') treeHost = true;

  constructor(private tree: ItskTreeComponent) {}

  ngOnInit() {}
}

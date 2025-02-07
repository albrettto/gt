import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IItskMenuItem, ItskMenuComponent } from '@grafit/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, ItskMenuComponent, RouterOutlet],
  standalone: true,
})
export class AppComponent {
  title = 'app';
  menu: IItskMenuItem[] = [
    {
      id: 0,
      parentId: null,
      name: 'Главная',
      url: '/',
      code: 'Home',
      sortOrder: 0,
    },
  ];
}

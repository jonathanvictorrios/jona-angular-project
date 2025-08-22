import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jona-angular-project');
}

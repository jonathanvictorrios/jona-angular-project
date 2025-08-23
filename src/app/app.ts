import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { List } from './list/list';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Menu,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jona-angular-project');
}

import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Home } from './home/home';
import { List } from './list/list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'list', component: List },
];



import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu }
];



import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Home } from './home/home';
import { List } from './list/list';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'users', component: User },
];



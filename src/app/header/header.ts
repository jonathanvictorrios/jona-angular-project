import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-header',
  imports: [MatToolbar,MatToolbarRow,MatIcon,Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports  : [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

}

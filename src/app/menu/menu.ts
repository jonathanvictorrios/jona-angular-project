import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-menu',
  imports  : [MatIconModule, MatDividerModule, MatButtonModule,RouterModule,MatMenuModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  standalone:true
})
export class Menu {

}

import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar,MatToolbarRow,MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}

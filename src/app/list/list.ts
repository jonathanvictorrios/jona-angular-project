import { Component } from '@angular/core';
import { Table } from '../table/table';

@Component({
  selector: 'app-list',
  imports: [Table],
  templateUrl: './list.html',
  styleUrl: './list.scss',
  standalone:true
})
export class List {

}

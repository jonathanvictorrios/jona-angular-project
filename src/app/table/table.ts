import {AfterViewInit,Component,Input,ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { UserElement } from '../user/user'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrl: 'table.scss',
  templateUrl: 'table.html',
  imports: [MatTableModule,MatPaginatorModule,MatPaginator],
  standalone:true
})
export class Table implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() columnsNames: string[] = [];
  @Input() dataSource: MatTableDataSource<UserElement> = new MatTableDataSource<UserElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

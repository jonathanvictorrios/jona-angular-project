import {Component,Input,ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { UserElement } from '../user/user'
import {MatSort, MatSortModule} from '@angular/material/sort';
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
  imports: [MatTableModule,MatPaginatorModule,MatPaginator,MatSortModule],
  standalone:true
})
export class Table {
  @Input() columnsNames: string[] = [];
  @Input() data: UserElement[] = [];
  dataSource = new MatTableDataSource<UserElement>([]);
  ngOnChanges(){
    this.dataSource = new MatTableDataSource<UserElement>(this.data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}

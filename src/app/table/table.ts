import {AfterViewInit,Component,Input,ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
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
  @Input() dataSource: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

import { Component } from '@angular/core';
import { Table } from '../table/table';

export interface UserElement {
  id:number;
  first_name:string;
  last_name:string;
  dni:string
}

const ELEMENT_DATA: UserElement[] = [
  {"id":1,"first_name":"Silvano","last_name":"Ixer","dni":"787-42-0229"},
  {"id":2,"first_name":"Annabal","last_name":"Rops","dni":"727-76-7853"},
  {"id":3,"first_name":"Anneliese","last_name":"Hansemann","dni":"729-48-5429"},
  {"id":4,"first_name":"Estrellita","last_name":"Manston","dni":"832-21-9923"},
  {"id":5,"first_name":"Kerr","last_name":"Summerlad","dni":"305-64-0953"},
  {"id":6,"first_name":"Jared","last_name":"Cadany","dni":"580-51-2662"},
  {"id":7,"first_name":"Wrennie","last_name":"Bertrand","dni":"273-57-9660"},
  {"id":8,"first_name":"Agna","last_name":"Grigoriev","dni":"122-60-8325"},
  {"id":9,"first_name":"Julio","last_name":"Andrzejewski","dni":"641-90-3771"},
  {"id":10,"first_name":"Lora","last_name":"Flett","dni":"143-11-2091"},
  {"id":11,"first_name":"Jobey","last_name":"Seamer","dni":"676-86-1007"},
  {"id":12,"first_name":"Fielding","last_name":"Cicculini","dni":"760-68-0798"},
  {"id":13,"first_name":"Wayne","last_name":"Duddan","dni":"554-65-7198"},
  {"id":14,"first_name":"Anthe","last_name":"Franck","dni":"407-41-3341"},
  {"id":15,"first_name":"Renell","last_name":"McClinton","dni":"395-35-7246"},
  {"id":16,"first_name":"Herve","last_name":"Odam","dni":"241-84-0274"},
  {"id":17,"first_name":"Rosalinda","last_name":"Antonikov","dni":"605-86-1877"},
  {"id":18,"first_name":"Karlan","last_name":"Gotthard.sf","dni":"281-46-8270"},
  {"id":19,"first_name":"Danell","last_name":"Scheffel","dni":"445-89-3635"},
  {"id":20,"first_name":"Cyb","last_name":"Dowry","dni":"489-46-1486"},
  {"id":21,"first_name":"Purcell","last_name":"Bromehead","dni":"458-25-5012"},
  {"id":22,"first_name":"Babbette","last_name":"Philcott","dni":"615-88-6472"},
  {"id":23,"first_name":"Risa","last_name":"Bleaden","dni":"827-42-7211"},
  {"id":24,"first_name":"Dorree","last_name":"Patriskson","dni":"833-02-0374"},
  {"id":25,"first_name":"Tiffi","last_name":"O'Kane","dni":"148-67-9815"},
  {"id":26,"first_name":"Lucina","last_name":"Dubbin","dni":"134-22-0825"},
  {"id":27,"first_name":"Susannah","last_name":"Fairleigh","dni":"726-18-8665"},
  {"id":28,"first_name":"Tripp","last_name":"Gaines","dni":"545-46-1567"},
  {"id":29,"first_name":"Kaitlyn","last_name":"Gino","dni":"633-37-0729"},
  {"id":30,"first_name":"Farley","last_name":"Petzold","dni":"748-10-6707"}
];
@Component({
  selector: 'app-user',
  imports: [Table],
  templateUrl: './user.html',
  styleUrl: './user.scss'

})
export class User {
  columnNames = ["id","first_name","last_name","dni"];
  dataSource = ELEMENT_DATA;
}

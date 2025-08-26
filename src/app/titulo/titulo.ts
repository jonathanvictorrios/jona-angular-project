import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-titulo',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './titulo.html',
  styleUrl: './titulo.scss',
  standalone: true
})
export class Titulo {

}

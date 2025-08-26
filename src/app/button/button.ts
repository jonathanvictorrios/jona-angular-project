import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button',
  imports: [MatTooltipModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() text: string = '';
  @Input() isDisabled:boolean = false;
  @Input() tooltip:string = '';
  @Input() href:string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = ''
}

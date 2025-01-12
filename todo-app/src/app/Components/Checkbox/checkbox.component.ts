import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() value: boolean = false;
  @Input() lineThrough: boolean = false;
  @Input() color: 'regular' | 'deactivated' = 'regular'

  get styleList(): { [key: string]: string } {
    return {
      'text-decoration': this.lineThrough ? 'line-through' : 'none'
    };
  }

  get classList(): string[] {
    return [`${this.color}`];
  }

}

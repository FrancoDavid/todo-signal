import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {
  @Input() text: string;
  @Input() color: 'blue' | 'purple' | 'white';
  @Input() fontWeight: 'bold' | 'regular' | 'lighted' | 'italic'
  @Input() fontSize: string;
  @Input() display: 'inline' | 'inline-block' | 'none';
  @Input() textAlign: 'center' | 'left' | 'right';

  constructor() {
    this.text = '';
    this.color = 'white'
    this.fontWeight = 'regular'
    this.fontSize = '12px'
    this.display = 'inline-block'
    this.textAlign = 'center'
  }

  get classList(): string[] {
    return [`${this.color}`];
  }

  get styleList(): { [key: string]: string } {
    return {
      'font-weight': this.fontWeight,
      'font-size': this.fontSize,
      'display': this.display,
      'text-align': this.textAlign
    };
  }
}

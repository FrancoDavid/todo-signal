import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() ariaLabel: string = '';
  @Input() placeholder: string = '';
  @Input() maxLength: number = 0;
  @Input() minLength: number = 0;

  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()


  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.valueChange.emit(this.value);
  }
}

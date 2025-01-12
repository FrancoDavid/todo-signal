import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  newTodo: string = ''

  onAddTodo() {
    console.log('onAddTodo', this.newTodo)
  }
}

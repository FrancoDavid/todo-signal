import { Component, WritableSignal } from '@angular/core';
 
import { TodoService } from '../Services/todo.service';
import { TaskTodo } from '../Interfaces/task.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  newTodo: string = ''
  tasks: WritableSignal<TaskTodo[]> = this._todoService.taskList;

  constructor(private _todoService: TodoService) {}

  onAddTodo() {
    if (!this.newTodo) return
    
    this._todoService.addNewTask(this.newTodo)
    this.newTodo = '';
  }

  onCompletedTodo(idTodo: number) {
    this._todoService.completedTask(idTodo)
  }
}

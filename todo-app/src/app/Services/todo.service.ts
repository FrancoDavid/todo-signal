import { Injectable, signal, WritableSignal } from '@angular/core';

import { TaskTodo } from '../Interfaces/task.interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _taskList: WritableSignal<TaskTodo[]> = signal<TaskTodo []>([]);

  constructor() {}

  addNewTask(nameTask: string) {
    const newTask: TaskTodo = { id: Date.now(), title: nameTask, isCompleted: false };

    this._taskList.update((currentTasks) => [...currentTasks, newTask])
  }

  get taskList(): WritableSignal<TaskTodo[]> {
    return this._taskList;
  }

  completedTask(idTask: number) {
    console.log('idTask: ', idTask);
    this._taskList.update((currentTasks) => {
      return currentTasks.map((currentTask) => {
        if (currentTask.id === idTask) {
          return {
            ...currentTask,
            isCompleted: !currentTask.isCompleted
          }
        } else {
          return currentTask
        }
      })
    })
  }
}

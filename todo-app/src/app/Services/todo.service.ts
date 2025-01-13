import { Injectable, signal, WritableSignal, computed, Signal } from '@angular/core';

import { TaskTodo } from '../Interfaces/task.interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _taskList: WritableSignal<TaskTodo[]> = signal<TaskTodo []>([]);
  private _completedTasks = computed(() => this.taskList().filter(task => task.isCompleted).length);
  private _countTasksList = computed(() => this.taskList().length)


  constructor() {}
  
  get taskList(): WritableSignal<TaskTodo[]> {
    return this._taskList;
  }

  get completedTasksCount(): Signal<Number> {
    return this._completedTasks
  }

  get taskCount(): Signal<Number> {
    return this._countTasksList
  }


  addNewTask(nameTask: string) {
    const newTask: TaskTodo = { id: Date.now(), title: nameTask, isCompleted: false };

    this._taskList.update((currentTasks) => [...currentTasks, newTask])
  }

  completedTask(idTask: number) {
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

  deleteTask(idTask: number) {
    this._taskList.update((currentTasks) => {
      return currentTasks.filter((currentTask) => currentTask.id !== idTask)
    })
  }
}

import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todolist';
  public newTask: string = "";
  constructor(public taskService: TasksService) {}

  add(newTask: string) {
    this.taskService.addTask(newTask);
    this.newTask = "";
  }

  delete(num: number) {
    this.taskService.deleteTask(num);
  }

  complete(task: string){
    this.taskService.completeTask(task);
  }
  clear(){
    this.taskService.clearCompleteTask();
  }
}


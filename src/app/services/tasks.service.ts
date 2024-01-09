import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: string[] = [];
  listTasks: string[] = [];
  public isCompleted?: boolean  = false;
  
  addTask(newTask: string) {
    if (newTask !== "") {
      this.tasks.push(newTask);
      
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
  completeTask(task:string) {
    if(!this.listTasks.includes(task)){
      this.listTasks.push(task);
    }
    
    }
  clearCompleteTask() {
      this.listTasks = []
    }
  }

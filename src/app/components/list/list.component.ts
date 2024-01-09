import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() name?:string
  constructor(public taskService:TasksService){

  }
}

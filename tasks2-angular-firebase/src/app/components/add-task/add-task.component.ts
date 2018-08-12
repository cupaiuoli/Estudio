import { TaskService } from './../../services/task.service';
import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = {
    title: '',
    description: ''
  };
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.task.title != '' || this.task.description != '') {
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }
}

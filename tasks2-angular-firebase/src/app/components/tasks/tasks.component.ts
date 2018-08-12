import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    })
  }

  deleteTask(event, task) {
    let response = confirm('Are you sure you want to delete?');
    if (response) {
      this.taskService.deleteTask(task);
    }
  }
  
  editTask(event, task) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }
  
  updateTask(task) {
    this.taskService.updateTask(task);
    this.editState = false;
    this.taskToEdit = null;
  }
}

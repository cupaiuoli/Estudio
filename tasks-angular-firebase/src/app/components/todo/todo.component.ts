import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todoListArray: any[];

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges()
    .subscribe(item => {
      this.todoListArray = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.todoListArray.push(x);
      });

      this.todoListArray.sort((a, b) => {
        return a.isChecked - b.isChecked;
      })
    });
  }

  addTodo(itemTitle){
    this.todoService.addTodo(itemTitle.value);
    itemTitle.value = null; 
  }

  updateTodo($key: string, isChecked: boolean) {
    this.todoService.updateTodo($key, !isChecked);
  }
  deleteTodo($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.todoService.removeTodo($key);
    }
  }
}

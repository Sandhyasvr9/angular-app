import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todoObj } from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  todoObj:todoObj;

  constructor( private router:Router) {
    this.todoObj  = new todoObj();
  }

  ngOnInit(): void {

  }

  getNewId(){
    const oldRecords = localStorage.getItem('todoList');
    if (oldRecords !== null){
      const todoList = JSON.parse(oldRecords);
      return todoList.length+1;
    }else{
      return 1;
    }
  }

  onAddTodo(){
    const latestId = this.getNewId();
    this.todoObj.id = latestId;
    const oldRecords = localStorage.getItem('todoList');
    if (oldRecords !== null){
      const todoList = JSON.parse(oldRecords);
      todoList.push(this.todoObj);
      localStorage.setItem('todoList',JSON.stringify(todoList));
    }else{
      const todoArr = [];
      todoArr.push(this.todoObj);
      localStorage.setItem('todoList',JSON.stringify(todoArr));
    }
    this.router.navigateByUrl('/todolist')
  }


}
